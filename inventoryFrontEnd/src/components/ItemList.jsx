
import Item from './Item';

const ItemList = ({items, setTrue}) => {
  
const itemNodes = items.map((item) => {
  return <Item item = {item} key ={item.id}/>
})

    return(
        <div className='itemList'>
            <h1> All Items in pipeline </h1>
            <button onClick = {setTrue}>Add New Order</button>
                <ul>
                    {itemNodes}
                </ul>
        </div>

    )
}

export default ItemList