import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"><h1>TravelWorld</h1></span>
        <div className="navItems">
          
         
          <button className="navButton">Help</button>
          <button className="navButton">Details</button>
          <button className="navButton">Cart</button>
          
          <button className="navButton">My Account</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar