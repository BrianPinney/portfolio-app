import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutMe(){

    return (
    <>
    <Container>
        <Row>
            <Col>
            
            </Col>
        </Row>
        <Row>
            <Col><h2>Quote</h2>
            <p><em>"If you stare in your rearview mirror, your future will run you over!"</em></p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2>About Me</h2>
                <p>I am a person of many hobbies and interests. Craft beer    Brewing, Bushcrafting, Bladesmithing, WhiteWater Kayaking,
                Camping, Gaming, biking (motor, mountain, and road). I am also a tech enthusiast. All my hobbies involve a certain level of 
                technology and as time goes buy I find myself wanting and learning more about different technologies that revolve around all
                the things I love to do.
                </p>
            </Col>
        </Row>
        <Row>
            <Col>
            <h2>Why Boca Code?</h2>
            <p>
                I chose Boca Code for the IRL experience, location, time line and title. I am looking forward having a better work life balance and the skill to do something something on the go.
            </p>
            </Col>
        </Row>
        <Row>
            <Col>
            <h2>Projects</h2>
            <p>I am excited to get started on an app idea I had shortly after purchasing my van.When looking for areas to visit I realized there wasn't a way to locate places to park in advance that suited my needs and wants. </p>
            </Col>
            <Col>
            <h2>After Boca Code</h2>
            <p>My ideal work environment would be anywhere with a strong network connection and be accessable with a vehicle. I would love to go see the rest of this and surrounding countries in my van while maintaining a job that helps finacially sustains this lifestyle.</p>
            </Col>
        </Row>
    </Container> 
    </>
    )
}