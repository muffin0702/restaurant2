import kitchen from '../images/kitchen-modified.png';
import misosoup from '../images/misosoup-modified.png';
import rice from '../images/rice-modified.png';

function AboutUs() {
  return (
    <div className="aboutuscontainer">
      <h1>About us</h1>
      <div className="imagecontainer">
        <div className="imagecontainerinside">
          <img alt='kitchen' src={kitchen}/>
          <h2>A Culinary Journey</h2>
          <p>Embark on a culinary journey that pays homage to the time-honored recipes passed down through generations. From the first bite, you'll experience the love and care that goes into every dish we serve. </p>
        </div>

        <div className="imagecontainerinside">
          <img alt='misosoup' src={misosoup}/>
          <h2>Handcrafted with Love</h2>
          <p>Each dish is handcrafted by our skilled chefs who take pride in using only the freshest, locally sourced ingredients. We carefully blend traditional techniques with a modern twist to offer you a dining experience that's both nostalgic and innovative.</p>
        </div>

        <div className="imagecontainerinside">
          <img alt='rice' src={rice}/>
          <h2>Cozy Ambiance</h2>
          <p>Our restaurant's cozy ambiance is designed to transport you to the warmth of a Japanese home. Whether you're dining with family or friends, our welcoming atmosphere invites you to savor the flavors of Japan while creating lasting memories.</p>
        </div>
        
        
      </div>
    </div>
  );
}

export default AboutUs;