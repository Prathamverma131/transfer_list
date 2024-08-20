import React from 'react'

function Buttons({data,setData,boxData,setBoxData}) {
  return (
    <div className='button-container'>

    <button onClick={()=>{
        let filterData = boxData.map((item)=>{
            if(item[1]=="left"){
                return [item[0],"right"];
            }
            return item;
        });
        setBoxData([...filterData]);
        setData([...filterData]);
        
    }}>{`>>`}</button>
    <button onClick={()=>{
        setData([...boxData]);
    }}>{`>`}</button>
    <button onClick={()=>{
        setData([...boxData]);
    }}>{`<`}</button>
    <button onClick={()=>{
        let filterData = boxData.map((item)=>{
            if(item[1]=="right"){
                return [item[0],"left"];
            }
            return item;
        })
        setBoxData([...filterData]);
        setData([...filterData]);
    }}>{`<<`}</button>
    </div>
  )
}

export default Buttons;