// row1
import nasu from '../images/nasu_nibitashi.png';
import curry from '../images/curryrice_white.png';
import mizutaki from '../images/mizutaki.png';
import soborodon from '../images/soboro_don.png';

// row2
import chasyudon from '../images/cha-syu_don.png';
import tarako from '../images/spaghetti_tarako.png';
import shake from '../images/yakijake.png';
import dagojiru from '../images/dagojiru.png';

// row3
import onigiri from '../images/onigiri_ikura.png';
import karaage from '../images/karaage.png';
import nikujaga from '../images/nikujaga.png';
import ramen from '../images/ramen.png';

// row4
import teaset from '../images/chagashi_tea.png';
import taiyaki from '../images/taiyaki.png';
import maccha from '../images/maccha_pafe.png';

function Menu() {
  return (
    <div className="menucontainer">
      <h1>Our Menu</h1>
      <div className='scrollcontainer'>
      <h2>Meal</h2>

        {/* row1 */}
        <div className="mealcontainer">
          <div className="meal">
            <img className="mealimg" alt="nasu" src={nasu} />
            <h3 className='mealtitle'>Boided eggplant $5</h3>
            <p>Recipe is made with ginger, scallions, and a slightly spicy sauce.</p> 
          </div>

          <div className="meal">
            <img className="mealimg" alt="curry" src={curry} />
            <h3 className='mealtitle'>Curry $9</h3>
            <p>The typical Japanese curry is thicker in texture and tastes sweeter but less spicy than its Indian counterpart.</p>
          </div>

          <div className="meal">
            <img className="mealimg" alt="mizutaki" src={mizutaki}/>
            <h3 className='mealtitle'>Mizutaki $12</h3>
            <p>Nabe-style hot pot dish of chicken and assorted vegetables that is boiled in a pot filled with dashi broth.</p>
          </div>

          <div className="meal">
            <img className="mealimg" alt="soborodon" src={soborodon} />
            <h3 className='mealtitle'>Soborodon $8</h3>
            <p>Japanese rice bowl with seasoned ground chicken and scrambled eggs</p>
          </div>
        </div>

        {/* row2 */}
        <div className="mealcontainer">
          <div className="meal">
            <img className="mealimg" alt="chasyudon" src={chasyudon} />
            <h3 className='mealtitle'>Chasyudon</h3>
            <p>Rice bowl dish made with succulent simmered pork, soft egg and then drizzled with mayonnaise and topped with spring onion</p> 
          </div>

          <div className="meal">
            <img className="mealimg" alt="tarako" src={tarako} />
            <h3 className='mealtitle'>Spaghetti tarako $9</h3>
            <p>Tarako Spaghetti is one of the most popular Japanese flavored pasta. Tarako is salted cod roe and eaten both as is or cooked.</p>
          </div>

          <div className="meal">
            <img className="mealimg" alt="shake" src={shake} />
            <h3 className='mealtitle'>Shake $12</h3>
            <p>Boiled salmon which is common breakfast. This is included rice and miso soup.</p>
          </div>

          <div className="meal">
            <img className="mealimg" alt="dagojiru" src={dagojiru} />
            <h3 className='mealtitle'>Dagojiru $7</h3>
            <p>Dagojiru is a dish that is often eaten at home in Kumamoto. It contains plenty of flour-made “dago, dumplings” and vegetables.</p>
          </div>
        </div>

        {/* row3 */}
        <div className="mealcontainer">
          <div className="meal">
            <img className="mealimg" alt="onigiri" src={onigiri} />
            <h3 className='mealtitle'>Onigiri $3</h3>
            <p>This is rice ball. You can choose flavor from Shake, Mentaiko, Tuna, Ume.</p>
          </div>

          <div className="meal">
            <img className="mealimg" alt="karaage" src={karaage} />
            <h3 className='mealtitle'>Karage $6</h3>
            <p>Delicious Japanese style fried chiken.</p>
          </div>

          <div className="meal">
            <img className="mealimg" alt="nikujaga" src={nikujaga} />
            <h3 className='mealtitle'>Nikujaga $8</h3>
            <p>Meat, potatoes and onion stewed in sweetened soy sauce and mirin.</p>
          </div>

          <div className="meal">
            <img className="mealimg" alt="ramen" src={ramen} />
            <h3 className='mealtitle'>Ramen $9</h3>
            <p>Fukuoka tonkotsu style.</p>
          </div>
        </div>

        {/* row4 */}
        <h2>Sweets</h2>
        <div className="mealcontainer">

          <div className="meal">
            <div className='sweetsimgcontainer'>
              <img className="sweetsimg" alt="teaset" src={teaset}/>
            </div>
            <h3 className='mealtitle'>Tea set $6</h3>
            <p>Hot green tea and Japanese sweets with.</p> 
          </div>

          <div className="meal">
            <div className='sweetsimgcontainer'>
              <img className="taiyaki" alt="taiyaki" src={taiyaki} />
            </div>  
            <h3 className='mealtitle'>Taiyaki $4</h3>
            <p>Japanese fish-shaped cake, commonly sold as street food. It imitates the shape of red sea bream.</p>
          </div>

          <div className="meal">
            <div className="sweetsimgcontainer">
              <img className="sweetsimg" alt="maccha" src={maccha} />
            </div>
            <h3 className='mealtitle'>Maccha pafe $10</h3>
            <p>Maccha, azuki beans and whip cream. This is included hot tea or coffee.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Menu;