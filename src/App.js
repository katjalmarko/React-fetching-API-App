import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import Fetching1 from './Fetching1';


function App() {

  const [name, setName] = useState("")
  const [predicted, setPredicted] = useState(null)

  const fetchData = async (e) => {
    e.preventDefault();
    const response = await 
    Axios.get(`https://api.agify.io/?name=${name}`)
    setPredicted(response.data);
    setName('');
}

  return (
    <div className='App'>
      <form onSubmit={() => {
        fetchData(name);
      }}>
      <input 
      placeholder='"Enter Name"'
      value={name} 
      onChange={(event) => {setName(event.target.value)}}
      />

      <button 
      onClick={fetchData}>Predict Age & Count</button>
      
      <h1>Name: {predicted?.name}</h1>
      <h1>Predicted Age: {predicted?.age}</h1>
      <h1>Count: {predicted?.count}</h1>
      </form>


      <Fetching1 />
    </div>
  )
}

export default App;