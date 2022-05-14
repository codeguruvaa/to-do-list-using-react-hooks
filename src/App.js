import React from "react";
import {useState} from 'react';
import List from "./List";

function App(){



  var [currentItem,setCurrentItem] = useState(null);
  var onChangeHandler =(e)=>{
    // console.log("current value",e.target.value);
    setCurrentItem(e.target.value);
  };

  var [itemList,updateItemList] = useState([]);

  var addItemToList=()=>{
    updateItemList([...itemList,{item:currentItem,key:Date.now()}]);
    // console.log("list items", itemList);
    setCurrentItem("")
  }

  return(
    <div>

      <input type='text' value={currentItem} onChange={onChangeHandler} />
      <button onClick={addItemToList}>Add</button>

      <List itemList={itemList} />

    </div>
  )
}

export default App;