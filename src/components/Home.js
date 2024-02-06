import React, {useState, useEffect} from 'react'
import Spinner from './Spinner';

function Home() {
  const [maxPage,setMaxPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage,setItemsPerPage] = useState(10);
  const [loading,setLoading] = useState(false);
  const [formData,setFormData] = useState({'country-name':'United Kingdom'});
  const [universities,setUniversities] = useState([])
  const handleSearch = async (e)=>{
    setLoading(true);
    setCurrentPage(1);
    setUniversities([])
    e.preventDefault();
    let url = `http://universities.hipolabs.com/search?country=${formData['country-name']}`;
    // let url = 'http://universities.hipolabs.com/search?country=United+Kingdom';
    let apiResult = await fetch(url);
    let parsedData = await apiResult.json();
    setUniversities(parsedData)
    setMaxPage(parsedData.length/itemsPerPage)
    setLoading(false)
    

  }
  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
  }

  async function fetchData(){
  setLoading(true);
  let url = `http://universities.hipolabs.com/search?country=${formData['country-name']}`;
  let apiResult = await fetch(url);
  let parsedData = await apiResult.json();
  setMaxPage(parsedData.length/itemsPerPage)
  setUniversities(parsedData)
  setLoading(false)
  }


  const handlePrevClick = ()=>{
    setCurrentPage(currentPage-1)
  }

  const handleNextClick = ()=>{
    setCurrentPage(currentPage+1)
  }

useEffect(()=>{
fetchData();
},[])

  return (
    <div className='container'>
      <form className=''>
      <label className='form-label text-light'>Enter Country Name</label>
        <input onChange={handleInputChange} className='form-control' type="text" value={formData['country-name']} name="country-name"/>
        <button onClick={handleSearch} className='btn btn-primary btn-lg my-4'>Search</button>
      </form>
      <br className='border-top'/>
      <div className='table-responsive'>
      <table className="rounded-3 table table-hover bg-primary text-light">
  <thead>
    <tr>
      <th scope="col">#</th> 
      <th scope="col">Name</th>
      <th scope="col">Web Page</th>
      <th scope="col">Country</th>
    </tr>
  </thead>
  <tbody className=''>
  {loading && <Spinner/>}
  
    {universities.length>0 ? universities.slice(currentPage*10-10,currentPage*10).map((item,index)=>(<tr key={index}><td>{(currentPage*10-9)+index}</td><td>{item.name}</td><td><a className='text-light' href={item.web_pages[0]}>{item.web_pages[0]}</a></td><td>{item.country}</td></tr>)) : (<tr><td className='h3 py-4 text-light bg-danger' colSpan={4}>Data not found, try different country</td></tr>)}

  </tbody>
  <tfoot>
    <tr>
      <td colSpan={4}>
    <div className='d-flex justify-content-around'>
    <button disabled={currentPage===1} onClick={handlePrevClick} className='btn btn-danger bg-warning text-dark h3'>&larr;</button>
    <button disabled={currentPage>=maxPage} onClick={handleNextClick} className='btn btn-danger bg-warning text-dark h3'>&rarr;</button>
    </div>
    </td>
    </tr>
  </tfoot>
</table>
</div>
     
    </div>
  )
}

export default Home;

