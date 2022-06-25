import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  limitToLast,
  onValue,
} from "firebase/database";
import "../assets/css/leaderboard.css";

export default function Leaderboard() {
  const db = getDatabase();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const detail = [];
    const recentScoreRef = query(
      ref(db, "users/"),
      orderByChild("score_total"),
      limitToLast(5)
    );
    onValue(recentScoreRef, (snapshot) => {
      const data = snapshot.val();
      Object.keys(data).map((item) => {
        const user = {
          username: data[item].username,
          score_total: data[item].score_total,
        };
        detail.push(user);
      });
      detail.sort((a, b) => b.score_total - a.score_total);
      setInfo(detail);
      console.log(info);
    });
  }, []);

  return (
    <div className="leaderboard-background">
      <div className="container">
        <div className="row">
          <div className="col-sm-6"></div>
          <div className="col-sm-6">
            <h1 className="my-4">Leaderboard</h1>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Username</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {info.map((item, key) => {
                  return (
                    <tr>
                      <td>{key + 1}</td>
                      <td>{item.username}</td>
                      <td>{item.score_total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
