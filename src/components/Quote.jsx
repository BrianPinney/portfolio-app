import { Container, Row, Col} from "react-bootstrap";

export default function Quote(){
    return (
        <section> 
            <Container className="quote-container">
                <Row className="text-center">
                    <Col>
                    <q><em>If you stare in your rearview mirror, your future will run you over.</em></q>
                    <p>-Brian Pinney-</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}