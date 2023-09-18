import homeimage from '../images/homeimage.jpg';
import ubereats from '../images/ubereats.png';


function Home() {
  return (
    <div className='homecontainer'>
      <h3>Japanese restaurant</h3>
      <h1 className="title">Achako</h1>
      <div className="homecontainerinside">
        <div>
          <h3>Are you missing Japanese food?</h3>
          <p>Step into our restaurant, where we've brought the heartwarming</p>
          <p>flavors of a Japanese mother's kitchen all the way to Vancouver.</p>
          <p>At "Taste of Home," we believe that food has the</p>
          <p>incredible power to evoke cherished memories and emotions.</p>
          <p> Our passion lies in recreating the comforting and</p>
          <p>authentic tastes that you'd find in a traditional Japanese home.</p>

          <div className="orderbuttoncontainer">
            <img className='ubereatsimg' alt="ubereats" src={ubereats}/>
            <button className="orderbutton">Order now</button>
          </div>
        </div>
        <img className="homeimg" alt="onigiri" src={homeimage}/>
      </div>
    </div>
  );
}

export default Home;