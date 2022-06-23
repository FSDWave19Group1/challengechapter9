import "../../assets/css/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";

const Footer = (props) => {
  return (
    <footer className="">
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="h1 text-white">FSD19</h5>
            <p className="small text-muted">
              This website host small indie games.
            </p>
            <p className="small text-muted mb-0">
              &copy; Copyrights@2022. All rights reserved.{" "}
              <a className="text-primary" href="#">
                FSD19T1
              </a>
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Profile">Profile</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Newsletter</h5>
            <p className="small text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <form action="#">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary"
                  id="button-addon2"
                  type="button"
                >
                  <p className="text-center"> Subscribe </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
