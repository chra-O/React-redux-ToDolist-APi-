import React, { useState } from "react";
import MainSection from "../Component/MainSection";
import { useSelector } from "react-redux";

import "./navbar.css";
export default function Information() {
    // to show both location and name
  const showName = useSelector((state) => state.Data.value);
  const showLocation = useSelector((state) => state.Location.value);

  return (
    <div>
      <MainSection title="4-B" />
      <div id="imformationdiv">
        <h5> Name is : {showName} </h5>

        <h5>Location is : {showLocation}</h5>
      </div>
    </div>
  );
}
