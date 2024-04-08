

const Item = ({item, handleItemDelete}) => {
  
return(
    <li className="item">
        <div className="itemInfo">
            <p>{item.part.model} </p>
            <p>{item.quantity}</p>
            <p>{item.status} </p>
        </div>
        <span className="symbol">&#9842;</span>
        <span className="symbol" onClick={() =>handleItemDelete(item)}>&#10006;</span>
    </li>
)


}

export default Item