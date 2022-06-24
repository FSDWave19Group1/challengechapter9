import { useState, useEffect } from "react";
// import NavigationBar from "../components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/gameProfile.css";
import React from "react";
import { getDatabase, ref, query, onValue } from "firebase/database";
import { UserAuth } from "../../context/AuthContext";
import DataPreview from "../../components/ui/dataPreview";

export default function Profile() {
  const { loggedinEmail } = UserAuth();
  console.log("useremail:" + localStorage.getItem("userEmail"));

  const [detailUser, setDetailUser] = useState({});

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
    <div className="user-profile-background">
      <div className="container">
        <div className="user-profile">
          <h1 className="my-3">Profile Details</h1>
          <div></div>
          <DataPreview field="ID" value={detailUser.id} />
          <DataPreview field="Username" value={detailUser.username} />
          <DataPreview field="Email" value={detailUser.email} />
          <DataPreview field="Score" value={detailUser.score_total} />
          <DataPreview field="Bio" value={detailUser.biodata} />
          <div className="my-4"></div>
        </div>
      </div>
    </div>
  );
}
