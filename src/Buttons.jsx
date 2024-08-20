import React from 'react'
import { useEffect,useState} from 'react';

function Buttons({data,setData,boxData,setBoxData,leftSelected,rightSelected,setLeftUpdate,setRightUpdate}) {

    let [leftMostSelect,setLeftMostSelect] = useState(true);
    let [rightMostSelect,setRightMostSelect] = useState(true);

    useEffect(()=>{

        let lCount = 0;
        let rCount = 0;

        data.forEach((item)=>{
            if(item[1]=="left"){
                lCount++;
            }else{
                rCount++;
            }
        })

        if(lCount==data.length){
            setRightMostSelect(false);
        }else{
            setRightMostSelect(true);
        }

        if(rCount==data.length){
            setLeftMostSelect(false);
        }else{
            setLeftMostSelect(true);
        }


    },[data]);


  return (
    <div  className='button-container'>

    <button disabled={leftMostSelect?false:true}  onClick={()=>{
        let filterData = boxData.map((item)=>{
            if(item[1]=="left"){
                return [item[0],"right"];
            }
            return item;
        });
        setBoxData([...filterData]);
        setData([...filterData]);
        
    }}>{`>>`}</button>
    <button disabled={leftSelected?false:true}  onClick={()=>{
        setData([...boxData]);
        setLeftUpdate((prev)=>!prev);
    }}>{`>`}</button>
    <button disabled={rightSelected?false:true}  onClick={()=>{
        setData([...boxData]);
        setRightUpdate((prev)=>!prev);
    }}>{`<`}</button>
    <button disabled={rightMostSelect?false:true} onClick={()=>{
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