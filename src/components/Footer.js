import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footercontainer">
      <h1>Contact</h1>
      <FontAwesomeIcon className="footericon" icon={faSquareInstagram} size="2xl" />
      <FontAwesomeIcon className="footericon" icon={faEnvelope} size="2xl" />
      <FontAwesomeIcon className="footericon" icon={faPhone} size="2xl" />
      <FontAwesomeIcon className="footericon" icon={faMapLocationDot} size="2xl" />
   
      
    </div>
  );
}

export default Footer;