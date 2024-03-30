

const Item = ({item}) => {
  
return(
    <li className="item">
        <p>{item.part.model} </p>
        <p>{item.quantity}</p>
        <p>{item.status} </p>
    </li>
)
}

export default Item