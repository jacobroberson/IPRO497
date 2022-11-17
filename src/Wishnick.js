import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Location.css";

function Wishnick({ name, img, facilities }) {
  const history = useHistory();
  return (
    <div className="locationPage">
      <div className="subHeader">
        <div className="nameBox">
          <h1>Wishnick Hall</h1>
        </div>
        <div className="reserveButton">
          <Button onClick={() => history.push("/reserve")} variant="outlined">RESERVE NOW</Button>
        </div>
      </div>

      <div className="image">
        <img
          src={
            process.env.PUBLIC_URL +
            "/media/Wishnick/IMG_3584.JPG"
          }
        />
      </div>

      <div className="rightColumn">
        <div className="facilities">
          <h2>Facilities</h2>
          <p>Natural lighting</p>
          <p>Tables</p>
          <p>Chairs</p>
        </div>

        {/* <div className="map">
          <img src="https://flownform.com/public/floorplan_floormap.png" />
        </div> */}
      </div>
    </div>
  );
}

export default Wishnick;
