import './App.css';
import CatFacts from './CatFacts';
import Predicter from './Predicter';
import Excuse from './Excuse'


function App() {
  
  return (
    <div className='App'>
      <h1>API FETCHING</h1>
      <Excuse />
      <Predicter />
      <CatFacts />
    </div>
  )
}

export default App;