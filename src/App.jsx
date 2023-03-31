import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import JobInfo from './Jobinfo';
import BtnContainer from './BtnContainer';



function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  //const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/react-tabs-project';


  const url = 'https://course-api.com/react-tabs-project';
  //const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  
  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      // handle error here, e.g. show an error message to the user
    } finally {
      setIsLoading(false);
    }
  };
    
  
  useEffect(() => {
    fetchJobs();
  },[])

  if(isLoading){
    return(
      <div className='loader'>
        <h1>Loading...</h1>
      </div>
    )
  }

  if(!jobs){
    setIsLoading(true);
    return <h1>Loading...</h1>
  }

  if (!jobs || jobs.length === 0) {
    return <h1>No jobs found.</h1>
  }

  return (
    <div className="App">
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </div>
  );
}
export default App;
