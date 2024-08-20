import { useState } from 'react'
import './App.css'
import Boxes from './Boxes'
import Buttons from './Buttons';

function App() {

  let [box,setBox] = useState([["JS","left"],["HTML","left"],["CSS","left"],["TS","left"],["React","right"],["Angular","right"],["Vue","right"],["Svelte","right"]]);
  let [boxData,setBoxData] = useState([["JS","left"],["HTML","left"],["CSS","left"],["TS","left"],["React","right"],["Angular","right"],["Vue","right"],["Svelte","right"]]);

  return (
    <>
      <div className="heading">
        Transfer list 
      </div>
      <div className="container">
          <Boxes data={box} setData={setBox} boxData={boxData} setBoxData={setBoxData} side="left" />
          <Buttons data={box} setData={setBox} boxData={boxData} setBoxData={setBoxData} />
          <Boxes data={box} setData={setBox} boxData={boxData} setBoxData={setBoxData} side="right"/>
        </div>
    </>
  )
}

export default App
