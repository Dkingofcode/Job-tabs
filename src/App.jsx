import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Jobinfo from './Jobinfo';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const url = 'https://course-api.com/react-tabs-project';

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  },[])

  if(isLoading){
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <Jobinfo jobs={jobs} />
    </div>
  )
}

export default App;
