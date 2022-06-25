import { useState, useEffect } from "react";
// import NavigationBar from "../components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/gameProfile.css";
import React from "react";
import { getDatabase, ref, query, onValue, update } from "firebase/database";
import { UserAuth } from "../../context/AuthContext";
import DataPreview from "../../components/ui/dataPreview";
import { Button } from "react-bootstrap";
import UserForm from "./userForm";

export default function Profile() {
  const { loggedinEmail } = UserAuth();
  console.log("useremail:" + localStorage.getItem("userEmail"));

  const [detailUser, setDetailUser] = useState({});
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(
    (props) => {
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
    },
    [refreshKey]
  );

  const handleDetailUser = (data) => {
    setDetailUser(data);
  };

  const editUser = (data) => {
    const db = getDatabase();
    const updates = {};
    updates["/users/" + detailUser.id + "/username"] = data.username;
    updates["/users/" + detailUser.id + "/biodata"] = data.biodata;
    update(ref(db), updates);
    setRefreshKey((prevState) => prevState + 1);
  };

  const [showModal, setShowModal] = useState(false);
  const onHandleShowModal = () => setShowModal(true);
  const onHandleCloseModal = () => setShowModal(false);
  const getUserEditForm = () => {
    onHandleShowModal();
  };

  return (
    <div className="user-profile-background">
      <div className="container">
        <div className="user-profile">
          <h1 className="my-3">Profile Details</h1>
          <div className="mb-4 me-3 text-end">
            <Button variant="primary" onClick={getUserEditForm}>
              Edit
            </Button>
          </div>
          <DataPreview field="ID" value={detailUser.id} />
          <DataPreview field="Username" value={detailUser.username} />
          <DataPreview field="Email" value={detailUser.email} />
          <DataPreview field="Score" value={detailUser.score_total} />
          <DataPreview field="Bio" value={detailUser.biodata} />
          <div className="my-4"></div>
        </div>
      </div>
      <UserForm
        handleClose={onHandleCloseModal}
        show={showModal}
        onHandleUserData={handleDetailUser}
        detailUser={detailUser}
        onEditUser={editUser}
      />
    </div>
  );
}
