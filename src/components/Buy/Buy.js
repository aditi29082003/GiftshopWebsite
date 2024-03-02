import giftbox from "../../assets/giftbox.png";
import "./Buy.css";

function UncontrolledExample() {
  return (
    <>
     <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={giftbox} class="d-block w-40 firstslide" alt="First slide"></img>
    <div class="carousel-caption d-none d-md-block">
    <h1>Awesome gift for your family nd friends</h1>
    <h3>Gifts available for every occasion</h3>
    <h4>find your best present</h4>
  </div>
    </div>
  </div>
</div>
<div className="menu">
<h1 style={{marginLeft:"70px"}}>Collections</h1>
   <ul className="collections">
    <li>Diwali gift set</li>
    <li>Birthday Special</li>
    <li>Marriage gifts</li>
    <li>Holi gifts</li>
    <li>Puja gifts</li>
    <li>Rakhi gifts</li>
    <li>Home decor</li>
    <li>Anniversary gift</li>
    
   </ul>
</div>
    </>
  );
}

export default UncontrolledExample;