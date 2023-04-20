import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
export default function About () {
  return (
    <main>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={6}>
          <img src="/images/myself2.jpg" className="rounded-circle"/>
          </Col>
          <Col>
          <h1 className="mt-3">Brian Pinney</h1>
                <p>I have many hobbies and interests. Craft beer    Brewing, Bushcrafting, Bladesmithing, WhiteWater Kayaking,
                Camping, Gaming, biking (motor, mountain, and road). I am also a tech enthusiast. All my hobbies involve a certain level of 
                technology and as time goes by, I find myself wanting and learning more about different technologies that revolve around all
                the things I love to do.
                </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}