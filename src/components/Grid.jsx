import { Col, Container, Row } from "react-bootstrap";

export default function Grid(){
    return (
        <section> 
        <Container className="grid-container">
            <Row>
                <Col sm={12} md={4}>
                <h2>Why Boca Code</h2>
                <p>I chose Boca Code for the IRL experience, location, time line and title. I am looking forward having a better work life balance and the skill to do something something on the go.
                </p>
                </Col>

                <Col sm={12} md={4}>
                <h2>Projects</h2>
                <p>I am excited to get started on an app idea I had shortly after purchasing my van. When looking for areas to visit I realized there wasn't a way to locate places to park in advance that suited my needs and wants. 
                </p>
                </Col>

                <Col>
                <h2>After Boca Code</h2>
                <p>My ideal work environment would be anywhere with a strong network connection and to be accessable by vehicle. I would love to go see the rest of this and surrounding countries in my van while maintaining a job that helps finacially sustain that lifestyle.
                </p>
                </Col>
            </Row>
        </Container>
        </section>
    )
}