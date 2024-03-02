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
import NavDropdown from "react-bootstrap/NavDropdown"

const Accounts = () => {
    return (
        <>
            <Container >
                <h1>Hii Customer</h1>
                <Row>
                    <Col><input type="text" placeholder="Orders" className="orders"></input></Col>
                    <Col><input type="text" placeholder="Wishlist" className="orders"></input></Col>
                    <Col><input type="text" placeholder="Coupons" className="orders"></input></Col>
                    <Col><input type="text" placeholder="Help Center" className="orders"></input></Col>
                </Row>
            </Container>
            <Container className="verifyemail">
                <Row>
                    <Col><h6><a href="#">Add/Verify your Email</a></h6>
                        <p>Get latest updates of your Orders</p>
                    </Col>
                    <Col>
                        <Button variant="primary ">Shop now</Button>
                    </Col>
                </Row>
                <Row>
                    <h3>Credit Options</h3>
                    <Col>
                        <NavDropdown title="Personal Loan" id="navbarScrollingDropdown" className='payment'>
                            <NavDropdown.Item href="#action3">Easy EMI</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Digital Application
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Affordable ROI
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col>
                        <NavDropdown title="Flipkart Axis Bank Credit Card" id="navbarScrollingDropdown" className='payment'>
                            <NavDropdown.Item href="#action3">Other Transaction</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Preffered partners
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Activation Benefits
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col>
                        <NavDropdown title="FlipKart pay later" id="navbarScrollingDropdown" className='payment'>
                            <NavDropdown.Item href="#action3">Secure and trusted</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                No cost EMI
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                1 Crore+ Customers
                            </NavDropdown.Item>
                        </NavDropdown>
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
                                <Button variant="primary " style={{ marginLeft: "70px" }}>Shop now</Button>
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
                                <Button variant="primary " style={{ marginLeft: "70px" }}>Shop now</Button>
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
                                <Button variant="primary " style={{ marginLeft: "70px" }}>Shop now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={diyas} style={{ height: '18rem' }} />
                            <Card.Body>
                                <Card.Title>Hair Accessories</Card.Title>
                                <Card.Text>
                                    Hair Accessories are the way to decorate our hairs.
                                </Card.Text>
                                <Button variant="primary " style={{ marginLeft: "70px" }}>Shop now</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                <Row style={{ marginTop: "60px" }}>
                    <Col sm={3}>
                        <Card style={{ width: '19rem' }}>
                            <Card.Img variant="top" src={hanging} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Expensive gift</Card.Title>
                                <Card.Text>
                                    Gift that you can give others.It has memorable things
                                </Card.Text>
                                <Button variant="primary " style={{ marginLeft: "70px" }}>Shop now</Button>
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
                                <Button variant="primary " style={{ marginLeft: "70px" }}>Shop now</Button>
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
                                <Button variant="primary " style={{ marginLeft: "70px" }}>Shop now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={gifts} style={{ height: '18rem' }} />
                            <Card.Body>
                                <Card.Title>Hair Accessories</Card.Title>
                                <Card.Text>
                                    Hair Accessories are the way to decorate our hairs.
                                </Card.Text>
                                <Button variant="primary " style={{ marginLeft: "70px" }}>Shop now</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                <Row>
                    <h1>Account Setting</h1>
                    <Col>
                        <input type="text" placeholder="Edit profile"></input>
                        <NavDropdown title="Saved Cards & violets" id="navbarScrollingDropdown" className='payment'>
                        <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
                       </NavDropdown>
                    </Col>
                    <Col>
                    <NavDropdown title="Saved Address" id="navbarScrollingDropdown" className='payment'>
                        <NavDropdown.Item href="#action3">Add new address</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Select languages" id="navbarScrollingDropdown" className='payment'>
                        <NavDropdown.Item href="#action3">Hindi</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            English
                        </NavDropdown.Item>                      
                        <NavDropdown.Item href="#action5">
                            Bengali
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Col>
                    <NavDropdown title="Notification setting" id="navbarScrollingDropdown" >
                        <NavDropdown.Item href="#action3">diwali gifts</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            teddy
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            holi gifts
                        </NavDropdown.Item>
                    </NavDropdown>
                </Row>
                <Row>
                    <h1>My Activity</h1>
                    <NavDropdown title="Reviews" id="navbarScrollingDropdown" className='payment'>
                        <NavDropdown.Item href="#action3">Pending</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Published
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Questions and Answers" id="navbarScrollingDropdown" className='payment'>
                        <NavDropdown.Item href="#action3">Questions</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Answers
                        </NavDropdown.Item>
                    </NavDropdown>
                </Row>
                <Row>
                    <h1>Feedback & Information</h1>
                    <NavDropdown title="Browse FAQ" id="navbarScrollingDropdown" className='payment'>
                        <NavDropdown.Item href="#action3">Delivered related</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                      Login and my account
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Refunds related
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Terms,Policies and licenses" id="navbarScrollingDropdown" className='payment'>
                        <NavDropdown.Item href="#action3">Terms of use</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Privacy Policy
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Returns Policy
                        </NavDropdown.Item>
                    </NavDropdown>
                </Row>
            </Container>
            <Button variant="primary" style={{ width: "50%", marginLeft: "390px" }}>logout</Button>
        </>
    )
}
export default Accounts;
