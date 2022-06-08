import { useState, useEffect } from "react";
// import NavigationBar from "../components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Profile() {
  return (
    <Fragment>
      <Form>
        <fieldset disabled>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Id</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">username</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">email</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">score</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">bio</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          </Form.Group>
        </fieldset>
      </Form>
    </Fragment>
  );
}
