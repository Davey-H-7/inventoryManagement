

const LandingContainer = () => {


    return (
        <div className="landingContainer">
            <h1>Welcome to Maker Tracker</h1>

            <h2>For first time users</h2>
            <p> Please begin by heading to our About page</p>
            <button onClick={() => window.location ="/about"}>About</button>

            <h2>For returning users</h2>
            <p> Click below to see your orders or parts</p>
            <button onClick={() => window.location ="/orders"}>View My Orders</button>
            <button onClick={() => window.location ="/parts"}>View My Parts</button>


  
            
        </div>
    );
}
 
export default LandingContainer;