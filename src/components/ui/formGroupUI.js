import { Form } from "react-bootstrap";

export default function FormGroupUI(props) {
  return (
    <Form.Group className="mb-3" controlId={props.controlId}>
      <Form.Label>Username</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Group>
  );
}
