import diyas from "../../assets/diyas.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import happybirthday from "../../assets/happybirthday.png"
import images from "../../assets/images.png";
import "./Categories.css";
import giftsfriends from"../../assets/giftsfriends.png";
import holi from"../../assets/holi.png";
import teddy from "../../assets/teddy.png";
import giftbox from"../../assets/giftbox.png";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import hairaccessories from "../../assets/hairaccessories.png";
import hanging from "../../assets/hanging.png";
import chocolates from "../../assets/chocolates.png";
import diwali from "../../assets/diwali.png"

const Categories=()=>{
    return(
        <>
        <Row>
            <Col sm={3} className="categories">
        <ul>
            <li>
                <a href="/categories">
            <img src={diyas} alt=""></img>
            <h4>Diyas</h4>
            </a>
            </li>
        </ul>
        <ul>
        <li>
        <a href="/categories">
            <img src={giftbox} alt=""></img>
            <h4>Giftbox</h4>
            </a>
            </li>
    </ul>
    <ul>
        <li>
        <a href="/categories">
            <img src={holi} alt=""></img>
            <h4>Holi</h4>
            </a>
        </li>
    </ul>
    <ul>
        <li>
        <a href="/categories">
            <img src={teddy} alt=""></img>
            <h4>Teddy</h4>
            </a>
        </li>
    </ul>
    <ul>
        <li>
        <a href="/categories">
            <img src={giftsfriends} alt=""></img>
            <h4>Gift for friends</h4>
            </a>
        </li>
    </ul>
    <ul>
        <li>
        <img src={giftbox}  alt=""></img>
            <a href="/categories">diya</a>
        </li>
    </ul>
    <ul>
            <li>
                <a href="/categories">
            <img src={diyas} alt=""></img>
            <h4>Diyas</h4>
            </a>
            </li>
        </ul>
    </Col>
    <Col sm={9}>
    <ul>
            <li  className='roundimg'>
                <img src={happybirthday}style={{width:"44%"}} alt =""></img>
                <h4 style={{marginLeft:"80px"}}>birthday</h4>
            </li>
            <li  className='roundimg'>
                <img src={images}style={{width:"120%",marginLeft:"-40px"}} alt =""></img>
                <h4 className="images">gifts</h4>
            </li>            
            <li  className='roundimg'>
                <img src={happybirthday}style={{width:"44%"}} alt =""></img>
                <h4 style={{marginLeft:"85px"}}>birthday</h4>
            </li>
            <li  className='roundimg'>
                <img src={images}style={{width:"120%",marginLeft:"-40px"}} alt =""></img>
                <h4 className="images">gifts</h4>
            </li>
            <li  className='roundimg'>
                <img src={happybirthday}style={{width:"44%"}} alt =""></img>
                <h4 style={{marginLeft:"70px"}}>birthday</h4>
            </li>
            <li  className='roundimg'>
                <img src={images}style={{width:"120%",marginLeft:"-40px"}} alt =""></img>
                <h4 className="images">gifts</h4>
            </li>            
            <li  className='roundimg'>
                <img src={happybirthday}style={{width:"44%"}} alt =""></img>
                <h4 style={{marginLeft:"80px"}}>birthday</h4>
            </li>
            <li  className='roundimg'>
                <img src={images}style={{width:"120%",marginLeft:"-40px"}} alt =""></img>
                <h4 className="images">gifts</h4>
            </li>            
            <li>
            <Card style={{ width: '18rem', marginRight:"40px"}}>
                            <Card.Img variant="top" src={hairaccessories} />
                            <Card.Body>
                                <Card.Title>Hair Accessories</Card.Title>
                                <Card.Text>
                                    Hair Accessories are the way to decorate our hairs.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70h4x"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
            </li>
            <li>
            <Card style={{ width: '19rem',marginRight:"40px" }}>
                            <Card.Img variant="top" src={images} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Exh4ensive gift</Card.Title>
                                <Card.Text>
                                    Gift that you can give others.It has memorable things
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70h4x"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
            </li>
            <li>
            <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={diyas}style={{height:'18rem'}} />
                            <Card.Body>
                                <Card.Title>Hair Accessories</Card.Title>
                                <Card.Text>
                                    Hair Accessories are the way to decorate our hairs.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
            </li>
            <li className="diffpro">
            <Card style={{ width: '19rem',marginRight:"40px" }}>
                            <Card.Img variant="top" src={hanging} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Expensive gift</Card.Title>
                                <Card.Text>
                                    Gift that you can give others.It has memorable things
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
            </li>
            <li className="diffpro">
            <Card style={{ width: '18rem' ,marginRight:"40px"}}>
                            <Card.Img variant="top" src={giftbox} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Alarm Clock</Card.Title>
                                <Card.Text>
                                    Alarm Clock is very benificial for each one.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
            </li>
            <li className="diffpro">
            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={chocolates} />
                            <Card.Body>
                                <Card.Title>Flower With Teddy</Card.Title>
                                <Card.Text>
                                    Flowers sh4read hah4h4iness in real life.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
            </li>
            <li className="diffpro">
            <Card style={{ width: '19rem' ,marginRight:"40px" }}>
                            <Card.Img variant="top" src={diwali} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Exh4ensive gift</Card.Title>
                                <Card.Text>
                                    Gift that you can give others.It has memorable things
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
            </li>
            <li className="diffpro">
            <Card style={{ width: '18rem' ,marginRight:"40px", }}>
                            <Card.Img variant="top" src={teddy} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Alarm Clock</Card.Title>
                                <Card.Text>
                                    Alarm Clock is very benificial for each one.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
            </li>
            <li className="diffpro">
            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={holi} />
                            <Card.Body>
                                <Card.Title>Flower With Teddy</Card.Title>
                                <Card.Text>
                                    Flowers sh4read hah4h4iness in real life.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
            </li>
        </ul>
    </Col>
    </Row>
    </>
    )
}
export default Categories;

  
