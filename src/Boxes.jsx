import React from 'react'
import './App.css'
import { useState } from 'react'

function Boxes({data,setData,boxData,setBoxData,side}) {


    let removeItem = (value)=>{

        console.log(boxData);
        let modifiedData = boxData.map((item)=>{
            if(item[0]==value){
                if(item[1]=="left"){
                    return [item[0],"right"]
                }else{
                    return [item[0],"left"]
                }
            }
            return item;
        })
        setBoxData([...modifiedData]);
    }


  return (
    <div className='box-container'>
        {
            data.map((boxData)=>{
                
                let [item,position] = boxData;
                if(position==side){
                return <div className='check-list' key={item}>
                     <input type="checkbox" name='check' value={item} onChange={(e)=>{
                        
                        if(e.target.checked){
                            removeItem(e.target.value);
                        }else{
                            removeItem(e.target.value);
                        }
                     }}/>
                    <label htmlFor="check">{item}</label>
                </div>}
            })
        }

    </div>
  )
}

export default Boxes;