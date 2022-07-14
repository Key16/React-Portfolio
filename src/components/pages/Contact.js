import React from "react";

const styles = {
  comment: {
    height: "10rem",
  },
};

export default function Contact() {
  return (
    <div class="m-3">
      <div class="col-md-12">
        <h1>Contact Me</h1>
        <h3> I would love to get in contact </h3>

        <div class="m-3 p-3">
          <p>
            <i class="bi bi-geo-alt-fill"></i> Sydney, Aus
          </p>
          <p>
            <i class="bi bi-github"></i> Github:{" "}
            <a href="github.com/Key16" target="_blank">
              {" "}
              Key16
            </a>{" "}
          </p>
          <p>
            <i class="bi bi-envelope-fill"></i> Email: jh.yield@gmail.com
          </p>
        </div>

        <div class="col-md-6">
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-6 position-relative">
              <div class="form-floating mt-2">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="First Name"
                  required
                ></input>

                <label for="floatingInputGrid">First Name</label>
              </div>
            </div>
            <div class="col-md-6 position-relative">
              <div class="form-floating mt-2">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="Last Name"
                  required
                ></input>

                <label for="floatingInputGrid">Last Name</label>
              </div>
            </div>
            <div class="col-md-12 position-relative">
              <div class="form-floating mt-2">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="Email"
                  required
                ></input>

                <label for="floatingInputGrid">Email Address</label>
              </div>
            </div>
            <div class="col-md-12 position-relative">
              <div class="form-floating mt-2">
                <textarea
                  type="text"
                  class="form-control"
                  id="floatingTextarea2"
                  placeholder="comment"
                  style={styles.comment}
                ></textarea>

                <label for="floatingInputGrid">Comment</label>
              </div>
            </div>

            <div class="col-md-12">
              <button class="btn btn-outline-dark" type="button">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
