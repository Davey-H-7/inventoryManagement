import "../styling/main/AboutContainer.css";

const AboutContainer = () => {
    return ( 
        <div className="about">
        <h1>Welcome!</h1>
        <h2>About Maker Tracker</h2>
        <p>Maker Tracker was created to allow any manufacturer to keep track of their orders and parts, from small online creatives to fully fledged industrial fabricators.</p>
        <h3>How to Use</h3>
        <ul>
            <li>Follow the link to the Parts section of the app. There you'll be able to add individual parts or components which can be reused over several orders.</li>
            <li>After you've created your parts, head to the Orders section. Here you can create your orders including the client and due date.</li>
            <li>Now you have your parts and an order, select that order and from this menu you can asign parts and quantities to it</li>
            <li>Within the order details, you can also click the recycle icon to edit associated parts i.e. to mark them as complete or under QA.</li>
            <li> You can also click the cross to remove them from the order, this will not delete them from the Parts section so they can easily be added back in later</li>
            <li>When allof the parts within an order have been marked as complete, the order will automatically be updated to show it is ready to be shipped!</li>
        </ul>
        </div>
     );
}
 
export default AboutContainer;