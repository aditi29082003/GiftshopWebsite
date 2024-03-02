import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import gifts from "../assets/gifts.png";
import flowerswithteddy from "../assets/flowerswithteddy.png";
import images from "../assets/images.png"
import studymaterial from "../assets/studymaterial.png"
import happybirthday from "../assets/happybirthday.png";
import "../App.css";

function IndividualIntervalsExample() {
  return (
    <>
      <Carousel>
        <Carousel.Item >
          <img src={gifts} alt= ""interval={500} className="gifts"></img>
          <Carousel.Caption>
            <h3>Amazing Gifts</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={flowerswithteddy} alt= "" className="gifts"></img> 
          <Carousel.Caption>
            <h3>Buy this gift for relatives</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={images} alt= "" className="gifts"></img>
          <Carousel.Caption>
            <h3>Gifts is precious</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={happybirthday} alt= "" className="gifts"></img>
          <Carousel.Caption>            
            <h3>Best gifts for birthday</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={200}>
          <img src={studymaterial} alt= "" className="gifts"></img>
          <Carousel.Caption>
            <h3>Very helpful for study</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </>
  );
}

export default IndividualIntervalsExample;