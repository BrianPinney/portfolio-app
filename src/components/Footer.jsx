import { Container, Row, Col } from "react-bootstrap";

export default function Footer(){

const currentYear = new Date().getFullYear()
const gitHubUrl = "https://github.com/brianpinney"

    return (
        <footer>
            <Container>
                <Row>
                    <Col><p>&copy; {currentYear} Brian Pinney</p>
                    <p><a href={gitHubUrl} target="_blank" rel="noreferrer">Code in Github</a></p></Col>
                </Row>
            </Container>
        </footer>
    )
}