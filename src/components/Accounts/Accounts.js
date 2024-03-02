import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Accounts.css";
import Card from "react-bootstrap/Card";
import diwali from "../../assets/diwali.png";
import holi from "../../assets/holi.png";
import hanging from "../../assets/hanging.png";
import gifts from "../../assets/gifts.png";
import giftbox from "../../assets/giftbox.png";
import chocolates from "../../assets/chocolates.png";
import diyas from "../../assets/diyas.png";
import teddy from "../../assets/teddy.png";

const Accounts = () => {
    return (
        <>
            <Container >
                <h1>Hii Customer</h1>
                <Row>
                    <Col className="orders">Orders</Col>
                    <Col className="orders">Wishlist</Col>
                    <Col className="orders"> Coupons</Col>
                    <Col className="orders">Help Center</Col>
                </Row>
            </Container>
            <Container className="verifyemail">
                <Row>
                    <Col><h6>Add/Verify your Email</h6>
                        <p>Get latest updates of your Orders</p>
                    </Col>
                    <Col>
                        <Button variant="primary ">Shop now</Button>
                    </Col>
                </Row>
                <Row>
                    <h3>Credit Options</h3>
                    <Col>

                        <h6>Personal loan</h6><p>Instant Loan up to 5 lakhs</p>
                    </Col>
                    <Col>
                        <h6>Flipkart Axis Bank Credit Card</h6>
                        <p>Apply & enter world of unlimited benefits!</p>
                    </Col>
                    <Col>
                        <h6>Flipkart Pay Later</h6>
                        <p>Get rs.10,000 worth Times Prime benefits</p>
                    </Col>
                </Row>
                <Row>
                    <h1>Recently Viewed Stores</h1>
                    <Col sm={3}>
                        <Card style={{ width: '19rem' }}>
                            <Card.Img variant="top" src={diwali} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Expensive gift</Card.Title>
                                <Card.Text>
                                    Gift that you can give others.It has memorable things
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={teddy} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Alarm Clock</Card.Title>
                                <Card.Text>
                                    Alarm Clock is very benificial for each one.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={holi} />
                            <Card.Body>
                                <Card.Title>Flower With Teddy</Card.Title>
                                <Card.Text>
                                    Flowers spread happiness in real life.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
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

                    </Col>
                </Row>
                <Row style={{marginTop:"60px"}}>
                    <Col sm={3}>
                        <Card style={{ width: '19rem' }}>
                            <Card.Img variant="top" src={hanging} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Expensive gift</Card.Title>
                                <Card.Text>
                                    Gift that you can give others.It has memorable things
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={giftbox} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Alarm Clock</Card.Title>
                                <Card.Text>
                                    Alarm Clock is very benificial for each one.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={chocolates} />
                            <Card.Body>
                                <Card.Title>Flower With Teddy</Card.Title>
                                <Card.Text>
                                    Flowers spread happiness in real life.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={gifts}style={{height:'18rem'}} />
                            <Card.Body>
                                <Card.Title>Hair Accessories</Card.Title>
                                <Card.Text>
                                    Hair Accessories are the way to decorate our hairs.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Shop now</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                <Row>
                    <h1>Account Setting</h1>
                    <Col>
                    
                    <h6>Edit Profile</h6>
                    <h6>Saved Cards & wallets</h6>
                    </Col>
                   <Col>
                   <h6>Saved Addresses</h6>
                    <h6>Select Languages</h6>
                   </Col>
                    
                    <h6>Notifications Setting</h6>
                </Row>
                <Row>
                    <h1>My Activity</h1>
                    <h6>Reviews</h6>
                    <h6>Questions and answers</h6>
                </Row>
                <Row>
                    <h1>Feedback & Information</h1>
                    <h6>Terms,Policies nd Licenses</h6>
                    <h6>Browse FAQs</h6>
                </Row>
            </Container>
            <Button variant="primary"style={{width:"50%",marginLeft:"390px"}}>logout</Button>
        </>
    )
}
export default Accounts;