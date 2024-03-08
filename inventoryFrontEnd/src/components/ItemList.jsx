import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
  
const itemNodes = items.map((item) => {
  return <Item item = {item} key ={item.id}/>
})

    return(
        <div className='itemList'>
            {itemNodes}
        </div>

    )
}

export default ItemList