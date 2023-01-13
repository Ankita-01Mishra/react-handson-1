import './App.css';
import './user'
import User from './user';
// import { useState } from 'react';

function App() {
// let data="ankita"

// const [show, setshow]=useState(10);
  // const handleClick=()=>{
  //   data="mishra"
  //    alert(data)
  //   //setshow(show+1)
  // }
  // console.log(show);
  // const handleReset=()=>{
  //   setshow(0)
  // }
  return (
    <>
  {/* <button onClick={handleClick} className="btn1">click me</button> */}
    {/* <button onClick={handleReset}>Reset</button> */}
     {/* <h2>{data}</h2>  */}
     {/* <button onClick={setshow(show+1)} className="btn1">click me</button>  */}
     {/* <h2>{show}</h2>   */}
   <User/>
   </>
  );
}

export default App;
