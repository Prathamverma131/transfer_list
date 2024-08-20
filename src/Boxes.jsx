import React from 'react'
import './App.css'
import { useState ,useEffect} from 'react'

function Boxes({data,setData,boxData,setBoxData,side,setSelected,update}) {

    let [selectedList,setSelectedList] = useState({});

    useEffect(()=>{
        setSelectedList({});

    },[update])

    useEffect(()=>{
        for(let flag in selectedList){
            if(selectedList[flag]){
                setSelected(true);
                return;
            };
        }
        setSelected(false);
    },[selectedList]);


    let removeItem = (value)=>{

        
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

        if(selectedList[value]){
            selectedList[value] = !selectedList[value];
        }else{
            selectedList[value] = true;
        }
        setSelectedList({...selectedList});
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