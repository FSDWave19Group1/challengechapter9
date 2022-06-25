import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/landingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BackgroundImagePage = () => {
  return (
    <div className="bg position-relative d-flex">
      <div className="text-center align-self-center mx-auto">
        <h1 className="judul-1">Play Traditional Game</h1>
        <h3 className="judul-2">Experience new traditional game play</h3>
        <Link to="/game/list">
          <Button variant="warning" className="my-5">
            Play Game
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BackgroundImagePage;
