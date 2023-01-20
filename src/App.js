import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import CatFacts from './CatFacts';
import Predicter from './Predicter';


function App() {
  
  const [partyExcuse, setPartyExcuse] = useState("")
  const [familyExcuse, setFamilyExcuse] = useState("")
  const [officeExcuse, setOfficeExcuse] = useState("")

  const fetchPartyExcuse = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/party/")
    .then((res) => {
      setPartyExcuse(res.data[0].excuse)
    })
  }

  const fetchFamilyExcuse = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/family/")
    .then((res) => {
      setFamilyExcuse(res.data[0].excuse)
    })
  }

  const fetchOfficeExcuse = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/office/")
    .then((res) => {
      setOfficeExcuse(res.data[0].excuse)
    })
  }

  console.log(partyExcuse)
  console.log(familyExcuse)
  console.log(officeExcuse)

  useEffect(() => {
    fetchPartyExcuse()
    fetchFamilyExcuse()
    fetchOfficeExcuse()
  }, [])

  return (
    <div className='App'>
      <h1>Generate An Excuse</h1>
      
      <button onClick={fetchPartyExcuse}>Party</button>
      <button onClick={fetchFamilyExcuse}>Family</button>
      <button onClick={fetchOfficeExcuse}>Office</button>

      <p>
        {partyExcuse}
        {familyExcuse}
        {officeExcuse}
      </p>

      <Predicter />
      <CatFacts />
    </div>
  )
}

export default App;