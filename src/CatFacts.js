import "./CatFacts.css";
import Axios from 'axios';
import { useEffect, useState } from 'react';

function CatFacts() {

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
    <div className='catfacts'>
      <h1>Cat Facts Generator</h1>
      <button onClick={fetchCatFact}>
        Generate Cat Fact</button>
      <div className="catresponse">
        <p>{catFact}</p>
      </div>
    </div>
  )
}

export default CatFacts;