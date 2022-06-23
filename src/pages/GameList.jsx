import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/GameList.css";
import { Card, Button } from "react-bootstrap";
import { getDatabase, ref, child, get } from "firebase/database";

export default function GameList() {
  const [gameList, setGameList] = useState([0, 0]);
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "games/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setGameList(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(gameList[0].game_url);
  return (
    <div className="game-list-background">
      <div className="container">
        <div className="card-game d-flex row">
          {gameList.map((game, index) => {
            return (
              <Card
                style={{ width: "18rem" }}
                key={index}
                className="col-sm-4 m-3"
              >
                <Card.Body>
                  <Card.Title>{game.game_name}</Card.Title>
                  <Card.Text>{game.description}</Card.Text>
                  <div className="text-end">
                    <Link to="/game/suit">
                      <Button variant="primary">Play!</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
