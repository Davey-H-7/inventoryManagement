import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
  
const itemNodes = items.map((item) => {
  return <Item item = {item} key ={item.id}/>
})

    return(
        <div className='itemList'>
            <h1> All Items in pipeline </h1>
                <ul>
                    {itemNodes}
                </ul>
        </div>

    )
}

export default ItemList