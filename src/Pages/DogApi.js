import React from "react";

import MainSection from "../Component/MainSection";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

export default function DogApi({ alertAddText, text }) {
  let [dog, setDog] = useState({});

  let hadelCilick = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => setDog(response.data));
  };

  // ********************************
  useEffect(() => {
    hadelCilick();
  }, []);

  return (
    <div>
      <MainSection title="3" />
      
     
             
            

      <Card
        style={{
          width: "18rem",
          marginTop: "20px",
          marginLeft: "20px",
          borderRadius: "20px",
        }}
      >
        <Card.Img variant="top" className="styleimage" src={dog.message} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" id="Buttonid" onClick={hadelCilick}>
            New Dog
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
