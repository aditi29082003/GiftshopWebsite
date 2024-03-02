import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import giftsfriends from "../assets/giftsfriends.png";
import chocolates from "../assets/chocolates.png";
import happybirtday from "../assets/happybirthday.png";
import hairaccessories from "../assets/hairaccessories.png";

function BasicExample() {
  return (
      <>
          <Container>
              <h1>Suggested For You</h1>
              <Row style={{marginTop:"60px"}}>
                  <Col sm={3}>
                      <Card style={{ width: '19rem' }}>
                          <Card.Img variant="top" src={giftsfriends} height={"285rem"} />
                          <Card.Body>
                              <Card.Title>Girls gift</Card.Title>
                              <Card.Text>
                                  Gift that is very useful for us.
                                </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col sm={3}>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={chocolates} height={"285rem"} />
                          <Card.Body>
                              <Card.Title>Chocolates</Card.Title>
                              <Card.Text>
                                  Chocolates are very yummy.
                              </Card.Text>
                              <h5>Buy for rs.239</h5>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col sm={3}>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={happybirtday} />
                          <Card.Body>
                              <Card.Title>Happy Birthday</Card.Title>
                              <Card.Text>
                                  Happy birthday wall frame.
                              </Card.Text>
                              <h5>Buy for rs.139</h5>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col sm={3}>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={hairaccessories} />
                          <Card.Body>
                              <Card.Title>Hair Accessories</Card.Title>
                              <Card.Text>
                                  It is a way to decorate our hairs.
                              </Card.Text>
                              <h5>Buy for rs.120</h5>
                          </Card.Body>
                      </Card>

                  </Col>
              </Row>
              <Row style={{marginTop:"60px"}}>
                  <Col sm={3}>
                      <Card style={{ width: '19rem' }}>
                          <Card.Img variant="top" src={giftsfriends} height={"285rem"} />
                          <Card.Body>
                              <Card.Title>Girl gift</Card.Title>
                              <Card.Text>
                              Gift that is very useful for us.
                              </Card.Text>
                              <h5>Buy for rs.150</h5>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col sm={3}>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={chocolates} height={"285rem"} />
                          <Card.Body>
                              <Card.Title>Chocolates</Card.Title>
                              <Card.Text>
                              Chocolates are very yummy.
                              </Card.Text>
                              <h5>Buy for rs.239</h5>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col sm={3}>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={happybirtday} />
                          <Card.Body>
                              <Card.Title>Happy Birthday</Card.Title>
                              <Card.Text>
                                  Happy birthday wall frame.
                              </Card.Text>
                              <h5>Buy for rs.235</h5>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col sm={3}>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={hairaccessories} />
                          <Card.Body>
                              <Card.Title>Hair Accessories</Card.Title>
                              <Card.Text>
                                  It is a way to decorate our hairs.
                              </Card.Text>
                              <h5>Buy for rs.139</h5>
                          </Card.Body>
                      </Card>

                  </Col>
              </Row>
              
          </Container>
      </>
  );
}

export default BasicExample;