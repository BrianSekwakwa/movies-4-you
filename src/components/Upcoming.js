import React from "react";
import Card from "react-bootstrap/Card";

function Upcoming() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const card = data.map(item => {
    return (
      <Card
        className="movie-cards__card-group__card-item"
        style={{ width: "18rem", height: "20rem" }}
      >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{item}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return (
    <div className="movie-cards">
      <h3 className="movie-cards__header">UpComing</h3>
      <div className="movie-cards__card-group">
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card> */}
        {card}
      </div>
    </div>
  );
}

export default Upcoming;
