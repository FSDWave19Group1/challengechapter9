import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = (props) => {
  return (
    <div class="container py-4">
      <div class="row gy-4 gx-5">
        <div class="col-lg-4 col-md-6">
          <h5 class="h1 text-white">FSD19</h5>
          <p class="small text-muted">This website host small indie games.</p>
          <p class="small text-muted mb-0">
            &copy; Copyrights@2022. All rights reserved.{" "}
            <a class="text-primary" href="#">
              FSD19T1
            </a>
          </p>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="text-white mb-3">Quick links</h5>
          <ul class="list-unstyled text-muted">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Profile">Profile</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-3">Newsletter</h5>
          <p class="small text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <form action="#">
            <div class="input-group mb-3">
              <input
                class="form-control"
                type="text"
                placeholder="Your email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button class="btn btn-primary" id="button-addon2" type="button">
                <p class="text-center"> Subscribe </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
