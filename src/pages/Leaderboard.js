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
      setInfo(detail);
      console.log(info);
    });
  }, []);

  return (
    <div style={{ margin: 60 }}>
      <h1 style={{ margin: 40 }}>Leaderboard</h1>
      <Table striped bordered hover>
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
  );
}
