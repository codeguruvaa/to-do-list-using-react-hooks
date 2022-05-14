import React from 'react';


function List(props) {
    // console.log("props",props);
    return (
        <div className='item' >
           {props.itemList.map((item)=>{
            return (
            <div>
            <h3>{item.item}</h3>

            </div>
            );
           })}

        </div>
    );
}

export default List;