const PartDetail = ({part, items, handleDelete}) => {
    let totalQuantity = 0
  
    const partItems = items.filter((partItem) => partItem.part.id == part.id)
    
    const itemNodes= partItems.map((item) => {
      return <li key ={item.id}>Order No:{item.order.id} for {item.order.client} {item.quantity}</li>
    })

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
        <ul>
            {itemNodes}
        </ul>
        <button onClick = {()=> window.location="/parts"}>Return to Parts</button>
        <button onClick={() => handleDelete(part)}> Delete Part </button>
    </div>
    )
}
 
export default PartDetail;