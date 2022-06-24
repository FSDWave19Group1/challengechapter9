import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import FormGroupUI from "../../components/ui/formGroupUI";

function UserForm(props) {
  const [username, setUsername] = useState("");
  const [biodata, setBio] = useState("");

  useEffect(() => {
    setBio(props.detailUser.biodata);
    setUsername(props.detailUser.username);
  }, [props.detailUser]);

  const usernameOnChangeHandle = (event) => {
    setUsername(event.target.value);
  };
  const bioOnChangeHandle = (event) => {
    setBio(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: username,
      biodata: biodata,
    };
    props.onEditUser(data);
    props.handleClose();
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="userForm" onSubmit={onSubmit}>
            <FormGroupUI
              controlId="username"
              type="text"
              placeholder="Please enter username"
              onChange={usernameOnChangeHandle}
              value={username}
            />
            <FormGroupUI
              controlId="biodata"
              type="text"
              placeholder="Please enter biodata"
              onChange={bioOnChangeHandle}
              value={biodata}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" form="userForm">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserForm;
