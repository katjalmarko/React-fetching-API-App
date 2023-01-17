import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import Fetching1 from './Fetching1';

function App() {

  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState(null)

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((response) => {
      setPredictedAge(response.data)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
      <input 
      placeholder='"Enter Name"' 
      onChange={(event) => {setName(event.target.value)}}
      />

      <button 
      onClick={fetchData}>Predict Age & Count</button>
      
      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
      </form>


      <Fetching1 />
    </div>
  )
}

export default App;