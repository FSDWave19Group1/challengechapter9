import React from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";


const BackgroundImagePage = () => {
  return (
    <div className="bg">
      <div>
        <h1 style={{padding: '120px'}}>Play Traditional Game</h1>
        <h3>Experience new traditional game play</h3>
        <Button variant="warning">Play Game</Button>{' '} {/* ROUTE --> /game/suite */}
      </div>
    </div>
  );
}

export default BackgroundImagePage;