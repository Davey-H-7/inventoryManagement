import { Link } from "react-router-dom"

const Item = ({item}) => {

    const itemURL = "/items/" + item.id
  
return(
    <Link className="item" to ={itemURL}>
        Model: {item.model} <br/>
        Status: {item.status}
    </Link>
)
}

export default Item