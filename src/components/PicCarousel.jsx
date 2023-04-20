import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function PictCarousel () {
    return (
      <section>
        <Container className="carousel-container">
          <Row>
            <Col className="p-0">
              <Carousel fade>
                <Carousel.Item>
                  <img src=""
                    className="d-block w-100"
                    alt="slide 1" />
                    <Carousel.Caption>
                  <h2>1</h2>
                    <p>First Items are great because theyre the first and i must learn to write better english</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src=""
                    className="d-block w-100"
                    alt="slide 2" />
                    <Carousel.Caption>
                  <h2>2</h2>
                    <p>First Items are great because theyre the first and i must learn to write better english</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src=""
                    className="d-block w-100"
                    alt="slide 3" />
                    <Carousel.Caption>
                  <h2>3</h2>
                    <p>First Items are great because theyre the first and i must learn to write better english</p>
                    </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }