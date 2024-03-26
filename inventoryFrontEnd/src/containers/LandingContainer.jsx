const LandingContainer = () => {


    return (
        <div className="landingContainer">
            <h1>Home</h1>
            <h2>Welcome to Fabric8</h2>
            <h3> If this is your first time using the software then please begin by adding your first order.</h3>
            <h3> Then you can add items and assign them to an order!</h3>

            <h4> Click below to see your orders or items</h4>
            
            <button onClick={() => window.location ="/orders"}>View My Orders</button>
            <button onClick={() => window.location ="/parts"}>View My Parts</button>
            
        </div>
    );
}
 
export default LandingContainer;