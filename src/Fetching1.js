import "./Fetching1.css";
import Axios from 'axios';
import { useEffect, useState } from 'react';

function Fetching1() {

// 1.-- Fetching API via fetch  

// fetch("https://catfact.ninja/fact")
// .then((response) => response.json())
// .then((data) => {
//   console.log(data)
// })

const [catFact, setCatFact] = useState("")

const fetchCatFact = () => {
  Axios.get("https://catfact.ninja/fact")
  .then((response) => {
    setCatFact(response.data.fact);
  })
}

useEffect(() => {
  fetchCatFact()
  // // 2.-- Fetching Api using axios library
  // // *(Removed the StrictMode from index.js to Fetch the API only once.)*
  
  // Axios.get("https://catfact.ninja/fact")
  // .then((response) => {
  //   setCatFact(response.data.fact);
  // })
}, [])
  
  return (
    <div className='Fetching1'>
      <button onClick={fetchCatFact}>
        Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  )
}

export default Fetching1;