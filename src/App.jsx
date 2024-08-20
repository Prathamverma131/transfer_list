import { useState } from 'react'
import './App.css'
import Boxes from './Boxes'
import Buttons from './Buttons';

function App() {

  let [box,setBox] = useState([["JS","left"],["HTML","left"],["CSS","left"],["TS","left"],["React","right"],["Angular","right"],["Vue","right"],["Svelte","right"]]);
  let [boxData,setBoxData] = useState([["JS","left"],["HTML","left"],["CSS","left"],["TS","left"],["React","right"],["Angular","right"],["Vue","right"],["Svelte","right"]]);
  let [leftSelected,setLeftSelected] = useState(false);
  let [rightSelected,setRightSelected] = useState(false);
  let [leftUpdated,setLeftUpdated] = useState(false);
  let [rightUpdated,setRightUpdated] = useState(false);


  return (
    <>
      <div className="heading">
        Transfer list 
      </div>
      <div className="container">
          <Boxes data={box} setData={setBox} boxData={boxData} setBoxData={setBoxData} side="left" setSelected={setLeftSelected} update={leftUpdated} setUpdate={setLeftUpdated} />
          <Buttons data={box} setData={setBox} boxData={boxData} setBoxData={setBoxData} leftSelected={leftSelected} rightSelected={rightSelected} setLeftUpdate={setLeftUpdated} setRightUpdate={setRightUpdated}/>
          <Boxes data={box} setData={setBox} boxData={boxData} setBoxData={setBoxData} side="right"  setSelected={setRightSelected} update={rightUpdated}/>
        </div>
    </>
  )
}

export default App
