import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BackgroundImagePage = () => {
  return (
    <div className="bg">
      <div>
        <h1 style={{ padding: "120px" }}>Play Traditional Game</h1>
        <h3>Experience new traditional game play</h3>
        <Link to="/game/list">
          <Button variant="warning">Play Game</Button>
        </Link>
      </div>
    </div>
  );
};

export default BackgroundImagePage;
