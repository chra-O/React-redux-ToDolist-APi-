import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Tabs, Tab } from "react-bootstrap";
import "./style.css";
import axios from "axios";
import MainSection from "../Component/MainSection";

export default function Home() {
  let [qoute, setQoute] = useState({});

  //  fuctiony click ka la nawy button bangman krdwa

  let hadelCilick = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => setQoute(response.data));
  };

  // ********************************
  useEffect(() => {
    hadelCilick();
  }, []);

  // *********************************

  return (
    <>
    <MainSection title="1"/>
      <div id="content">
        {" "}
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="content">
            {qoute.content}
          </Tab>
          <Tab eventKey="profile" title="author">
            {qoute.author}
          </Tab>
          <Tab eventKey="contact" title="authorSlug">
            {qoute.authorSlug}
          </Tab>
        </Tabs>
      </div>
      <Button variant="secondary" id="Buttonid" onClick={hadelCilick}>
        New Qouta
      </Button>{" "}
    </>
  );
}
