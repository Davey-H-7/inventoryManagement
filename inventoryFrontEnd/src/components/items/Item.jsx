

const Item = ({item}) => {
  
return(
    <li className="item">
        Model: {item.model} <br/>
        Status: {item.status}
    </li>
)

}

export default Item