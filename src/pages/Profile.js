import { useState, useEffect } from "react";
// import NavigationBar from "../components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import { getDatabase, ref, query, onValue } from "firebase/database";
import { UserAuth } from "../context/AuthContext";

export default function Profile() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [biodata, setBiodata] = useState("");
  //const [userID, setUserID] = useState("Ht2AaA00rPMbsECgWwsvUGe71M62");
  // const [email, setEmail] = useState("vaee@gmail.com");

  const { loggedinEmail } = UserAuth();
  console.log("useremail:" + localStorage.getItem("userEmail"));
  // const [info, setInfo] = useState({});
  // const [detailUser, setDetailUser] = useState({
  //   id: "",
  //   username: "",
  //   email: "",
  //   biodata: "",
  //   score_total: "",
  // });

  const [detailUser, setDetailUser] = useState({});
  // let userfiltered = {};

  useEffect((props) => {
    const db = getDatabase();
    const userDetail = [];
    const userData = query(ref(db, "users/"));
    onValue(userData, (snapshot) => {
      const data = snapshot.val();
      Object.keys(data).map((item) => {
        const user = {
          id: data[item].id,
          username: data[item].username,
          email: data[item].email,
          biodata: data[item].biodata,
          score_total: data[item].score_total,
        };
        userDetail.push(user);
      });
      const userfiltered = userDetail.find(
        (x) => x.email === localStorage.getItem("userEmail")
      );
      console.log(userDetail);
      setDetailUser({
        id: userfiltered.id,
        username: userfiltered.username,
        email: userfiltered.email,
        biodata: userfiltered.biodata,
        score_total: userfiltered.score_total,
      });
    });
  }, []);

  return (
    <Fragment>
      <Form>
        <fieldset disabled>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Id</Form.Label>
            <Form.Control id="disabledTextInput" defaultValue={detailUser.id} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">User Name</Form.Label>
            <Form.Control
              id="disabledTextInput"
              defaultValue={detailUser.username}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
            <Form.Control
              id="disabledTextInput"
              defaultValue={detailUser.email}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Score</Form.Label>
            <Form.Control
              id="disabledTextInput"
              defaultValue={detailUser.score_total}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Bio</Form.Label>
            <Form.Control
              id="disabledTextInput"
              defaultValue={detailUser.biodata}
            />
          </Form.Group>
        </fieldset>
      </Form>
    </Fragment>
  );
}
