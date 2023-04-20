import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function PicCarousel() {
    return (
      <section>
        <Container className="carousel-container">
          <Row>
            <Col className="p-0">
              <Carousel fade>
                <Carousel.Item>
                  <img src="/images/pic1.jpg"
                    className="d-block w-100"
                    alt="slide 1" />
                    <Carousel.Caption>
                  <h2>Hiking through the woods</h2>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src="/images/pic2.jpg"
                    className="d-block w-100"
                    alt="slide 2" />
                    <Carousel.Caption>
                  <h2>Camping during paddle class weekend</h2>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src="/images/pic3.jpg"
                    className="d-block w-100"
                    alt="slide 3" />
                    <Carousel.Caption>
                  <h2>Riding my Onewheel through the city</h2>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src="/images/pic4.jpg"
                    className="d-block w-100"
                    alt="slide 4" />
                    <Carousel.Caption>
                  <h2>Knife blank</h2>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src="/images/pic5.jpg"
                    className="d-block w-100"
                    alt="slide 5" />
                    <Carousel.Caption>
                  <h2>Unfinished Scales</h2>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src="/images/pic6.jpg"
                    className="d-block w-100"
                    alt="slide 6" />
                    <Carousel.Caption>
                  <h2>Fininshed Knife</h2>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src="/images/pic7.jpg"
                    className="d-block w-100"
                    alt="slide 7" />
                    <Carousel.Caption>
                  <h2>Bushcraafting/ survival training</h2>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src="/images/pic8.jpg"
                    className="d-block w-100"
                    alt="slide 8" />
                    <Carousel.Caption>
                  <h2>Nano Brewery</h2>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src="/images/pic9.jpg"
                    className="d-block w-100"
                    alt="slide 9" />
                    <Carousel.Caption>
                  <h2>Random Cave Crawling</h2>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }