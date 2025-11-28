import {useState} from "react"
import './App.css';

function App() {

   const [number,setNumber]=useState(5);

   const incHan=()=>{
      setNumber(number+1);
   }
   const decHan=()=>{
      setNumber(number-1);
   }

  return (
    <div className="App">
      <p>Initial value is {number}</p>
      <button onClick={incHan}>increase by 1</button> 
      <button onClick={decHan}>Decrease by 1</button>
    </div>
  );
}

export default App;
