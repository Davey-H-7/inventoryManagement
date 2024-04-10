const NotFound = () => {
    return ( 
        <div className="errorPage">
            <h1> Sorry!</h1>
            <h2>We couldn't find this page</h2>
            <h3> Try the below buttons to get where you need</h3>

            <div className="errorButtons">
                <button onClick={() => window.location="/"}>Home</button>
                <button onClick = {() => window.location="/orders"}>Your Orders</button>
                <button onClick = {() => window.location ="/parts"}>Your Parts</button>
            </div>
        </div>
    ) 
}
 
export default NotFound;