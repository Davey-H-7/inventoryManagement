import { useNavigate } from 'react-router-dom';
import Item from './Item';

const ItemList = ({items}) => {

    const navigate = useNavigate()

    if(items.length === 0){
        return <p>Loading items</p>
    }
  
    const itemNodes = items.map((item) => {
         return <Item item = {item} key ={item.id}/>
    })

    const onAdd = () => {
        navigate("/items/new")
    }

    return(
        <div className='itemList'>
            <h1> All Items in pipeline </h1>
            <button onClick = {()=> window.location="/"}>Return to Home</button>
            <button onClick = {onAdd}>Add New Item</button>
                <ul>
                    {itemNodes}
                </ul>
        </div>

    )
}

export default ItemList