import './Excuse.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';


function Excuse() {
  
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
    <div className='Excuse'>
      <h1>Excuse Generator</h1>
      
      <div className='nestedbuttons'>
      <button 
      onClick={() => {fetchExcuse("party")}}>Party
      </button>
      <button 
      onClick={() => {fetchExcuse("family")}}>Family
      </button>
      <button
      onClick={() => {fetchExcuse("office")}}>Office
      </button>
      <button
      onClick={() => {fetchExcuse("developers")}}>Developers
      </button>
      <button
      onClick={() => {fetchExcuse("gaming")}}>Gaming
      </button>
      <button
      onClick={() => {fetchExcuse("unbelievable")}}>Unbelievable
      </button>
      </div>

    <div className='exresponse'>
      <p>
        {generatedExcuse}
      </p>
    </div>  
    </div>
  )
}

export default Excuse;