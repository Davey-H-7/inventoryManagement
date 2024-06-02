import { Link } from "react-router-dom"

const PartDetail = ({part, items, handleDelete}) => {
    let totalQuantity = 0
  
    const partItems = items.filter((partItem) => partItem.part.id == part.id)
    let itemNodes = [];

    if (length.partItems > 0){
      itemNodes= partItems.map((item) => {
      return <Link to = {"/orders/" +item.order.id} className="listItem" key ={item.id}>{item.order.client} Order No:{item.order.id} Amount: {item.quantity}</Link>
    })
  }

    const calculateTotal = () => {
      partItems.forEach(element => {
        totalQuantity += element.quantity;
      });
    }

    calculateTotal();

    return (
    <div className="partDetail">
        <h1>{part.model}</h1>
        <h2>{part.description}</h2>
        <h3> Total quantity across orders: {totalQuantity}</h3>
        <h3>Included in orders:</h3>
        {itemNodes.length > 0 ?
         <ul className="detailOrderList">
            {itemNodes}
        </ul>
        :<p>No orders found</p>}
        <button onClick = {()=> window.location="/parts"}>Return to Parts</button>
        <button onClick={() => handleDelete(part)}> Delete Part </button>
        <button onClick = {() => window.location ='/parts/' + part.id + '/edit'}>Update part</button>    </div>
    )
}
 
export default PartDetail;