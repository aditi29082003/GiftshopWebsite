import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from "../assets/images.png";
import hairaccessories from "../assets/hairaccessories.png";
import flowerswithteddy from "../assets/flowerswithteddy.png";
import alarmclock from "../assets/alarmclock.png";

function BasicExample() {
    return (
        <>
            <Container>
                <h1>Recently Viewed Stores</h1>
                <Row style={{marginTop:"60px"}}>
                    <Col sm={3}>
                        <Card style={{ width: '19rem' }}>
                            <Card.Img variant="top" src={images} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Expensive gift</Card.Title>
                                <Card.Text>
                                    Gift that you can give others.It has memorable things
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={alarmclock} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Alarm Clock</Card.Title>
                                <Card.Text>
                                    Alarm Clock is very benificial for each one.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={flowerswithteddy} />
                            <Card.Body>
                                <Card.Title>Flower With Teddy</Card.Title>
                                <Card.Text>
                                    Flowers spread happiness in real life.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={hairaccessories} />
                            <Card.Body>
                                <Card.Title>Hair Accessories</Card.Title>
                                <Card.Text>
                                    Hair Accessories are the way to decorate our hairs.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Add to cart</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                <Row style={{marginTop:"60px"}}>
                    <Col sm={3}>
                        <Card style={{ width: '19rem' }}>
                            <Card.Img variant="top" src={images} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Expensive gift</Card.Title>
                                <Card.Text>
                                    Gift that you can give others.It has memorable things
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={alarmclock} height={"285rem"} />
                            <Card.Body>
                                <Card.Title>Alarm Clock</Card.Title>
                                <Card.Text>
                                    Alarm Clock is very benificial for each one.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={flowerswithteddy} />
                            <Card.Body>
                                <Card.Title>Flower With Teddy</Card.Title>
                                <Card.Text>
                                    Flowers spread happiness in real life.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={hairaccessories} />
                            <Card.Body>
                                <Card.Title>Hair Accessories</Card.Title>
                                <Card.Text>
                                    Hair Accessories are the way to decorate our hairs.
                                </Card.Text>
                                <Button variant="primary "style={{marginLeft:"70px"}}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default BasicExample;