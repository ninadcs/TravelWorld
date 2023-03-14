import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Destinations</li>
          <li className="fListItem">Cities</li>
          
        </ul>
        <ul className="fList">
          <li className="fListItem">About Us </li>
          <li className="fListItem">Company</li>
        
          
        </ul>
        <ul className="fList">
          <li className="fListItem">Partner with Us </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Advertise on TravelWorld</li>
          <li className="fListItem">Connectivity partners </li>
         
        </ul>
        <ul className="fList">
          
          <li className="fListItem">Facebook</li>
          <li className="fListItem">Instagram </li>
          <li className="fListItem">LinkedIn </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Privacy Policy</li>
          <li className="fListItem">Cookie policy</li>
          <li className="fListItem">Terms of Use</li>
          
        </ul>
      </div>
     
    </div>
  );
};

export default Footer;