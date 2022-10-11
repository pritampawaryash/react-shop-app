import React from "react";
import Card from "react-bootstrap/Card";
import hunter from "../../images/hunter.webp";
import scramp from "../../images/scramp.webp";
import bullet from "../../images/bullet.webp";

import meteor from "../../images/meteor.jpg";
import himalayan from "../../images/himalayan.webp";

import classic from "../../images/classic.webp";

import CardGroup from "react-bootstrap/CardGroup";

export default function Mmodels() {
  return (
    <>
      <div className="container mt-5">
        <CardGroup >
          <Card className="m-2 ">
            <Card.Img variant="top" src={hunter} />
            <Card.Body>
              <Card.Title>HUNTER 350</Card.Title>
              <Card.Link
                className="btn btn-outline-dark btn-sm"
                href="https://www.royalenfield.com/in/en/motorcycles/hunter-350/"
              >
                More..
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className="m-2">
            <Card.Img variant="top" src={scramp} />
            <Card.Body>
              <Card.Title>SCRAMP 411</Card.Title>
              <Card.Link
                className="btn btn-outline-dark btn-sm"
                href="https://www.royalenfield.com/in/en/motorcycles/scram411/"
              >
                More..
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className="m-2">
            <Card.Img variant="top" src={classic} />
            <Card.Body>
              <Card.Title>CLASSIC 350</Card.Title>
              <Card.Link
                className="btn btn-outline-dark btn-sm"
                href="https://www.royalenfield.com/in/en/motorcycles/classic-350/"
              >
                More..
              </Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="m-2">
            <Card.Img variant="top" src={meteor} />
            <Card.Body>
              <Card.Title>METEOR</Card.Title>
              <Card.Link
                className="btn btn-outline-dark btn-sm"
                href="https://www.royalenfield.com/in/en/motorcycles/meteor/"
              >
                More..
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className="m-2">
            <Card.Img variant="top" src={himalayan} />
            <Card.Body>
              <Card.Title>HIMALAYAN</Card.Title>
              <Card.Link
                className="btn btn-outline-dark btn-sm"
                href="https://www.royalenfield.com/in/en/motorcycles/himalayan/"
              >
                More..
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className="m-2">
            <Card.Img variant="top" src={bullet} />
            <Card.Body>
              <Card.Title>BULLET</Card.Title>
              <Card.Link
                className="btn btn-outline-dark btn-sm"
                href="https://www.royalenfield.com/in/en/motorcycles/bullet-models/bullet-350/"
              >
                More..
              </Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}
