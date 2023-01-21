import './Predicter.css';
import Axios from 'axios';
import { useState } from 'react';

function Predicter() {

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
    <div className='predicter'>
      <h1>Name Predicter</h1>

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
      
      <div className='predictresponse'>
      <h2>Name: <span style={{color: "white"}}>"{predicted?.name}"</span></h2>
      <h2>Predicted Age: <span style={{color: "white"}}>"{predicted?.age}"</span></h2>
      <h2>Count: <span style={{color: "white"}}>"{predicted?.count}"</span></h2>
      </div>

      </form>
    </div>
  )
}

export default Predicter;