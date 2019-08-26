import React, { Component } from "react";
import signUpImage from "../../../assets/images/video_streaming.png";
import Button from "../Button/Button";
import Input from "../Input/Input.js";
import classes from "./SignUp.css";

export default class SignUp extends Component {
  render() {
    


    return (
      <div className={"row " + classes.SignUpContainer}>
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card horizontal hoverable">
            <div className={"card-image " + classes.SignupImage}>
              <img src={signUpImage} />
              <a href="#">I am already member</a>
            </div>
            <div className="card-stacked">
              <h3 className="card-title center-align">Sign Up</h3>
              <div className="card-content">
                <form>
                  <div className="row">
                    <Input
                      wrapperClass="col s12 input-field"
                      validate="validate"
                      id="fullName"
                      type="text"
                      label="Full name"
                    />

                    <Input
                      wrapperClass="col s12 input-field"
                      validate="validate"
                      id="email"
                      type="email"
                      label="Email address"
                    />

                    <Input
                      wrapperClass="col s12 input-field"
                      validate="validate"
                      id="password"
                      type="password"
                      label="Password"
                    />
                  </div>

                  <p>
                    <label>
                      <input type="checkbox" />
                      <span className={classes.Terms}>
                        I agree all statements in{" "}
                        <strong>Terms of service</strong>
                      </span>
                    </label>
                  </p>

                  <Button
                    className={classes.BtnSignUp}
                    icon="how_to_reg"
                    iconAlign="left"
                    type="submit"
                  >
                    Register
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="container card hoverable ">
        <div className="row signup-content">
          <div className="col s6 signup-form ">
            <h3 className="card-title center-align">Sign Up</h3>
            <div class="valign-wrapper row ">
              <div class="col s12">
                <form>
                  <div class="row">
                    <div class="input-field col s12">
                      <label for="fullName">Full name</label>
                      <input
                        type="text"
                        class="validate"
                        name="fullName"
                        id="fullName"
                      />
                    </div>

                    <div class="input-field col s12">
                      <label for="email">Email address</label>
                      <input
                        type="email"
                        class="validate"
                        name="email"
                        id="email"
                      />
                    </div>

                    <div class="input-field col s12">
                      <label for="password">Password </label>
                      <input
                        type="password"
                        class="validate"
                        name="password"
                        id="password"
                      />
                    </div>
                  </div>

                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        I agree all statements in{" "}
                        <strong>Terms of service</strong>
                      </span>
                    </label>
                  </p>

                  <button
                    class="btn waves-effect waves-light"
                    type="submit"
                    disabled
                    name="action">
                    Register
                    <i class="material-icons left">how_to_reg</i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col s6 signup-image">
            <img src={signUpImage} />
          </div>
        </div>
      </div> */
}
