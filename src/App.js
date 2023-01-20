import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import CatFacts from './CatFacts';
import Predicter from './Predicter';


function App() {
  
  const [generatedExcuse, setGeneratedExcuse] = useState("")

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
    .then((res) => {
      setGeneratedExcuse(res.data[0].excuse)
    })
  }

  useEffect(() => {
    fetchExcuse()
  }, [])

  return (
    <div className='App'>
      <h1>Generate An Excuse</h1>
      
      <button 
      onClick={() => {fetchExcuse("party")}}>Party
      </button>
      <button 
      onClick={() => {fetchExcuse("family")}}>Family
      </button>
      <button
      onClick={() => {fetchExcuse("office")}}>Office
      </button>

      <p>
        {generatedExcuse}
      </p>

      <Predicter />
      <CatFacts />
    </div>
  )
}

export default App;