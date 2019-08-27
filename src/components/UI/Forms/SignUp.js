import React, { Component } from "react";
import signUpImage from "../../../assets/images/video_streaming.png";
import Button from "../Button/Button";
import Input from "../Input/Input.js";
import classes from "./SignUp.css";

export default class SignUp extends Component {
  state = {
    isSignUpForm: true,
    isValid: false,
    acceptTerms: false,
    signUpControls: {
      fullName: {
        value: "",
        placeHolder: "Full name",
        type: "text",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 8,
          isRequired: true
        },
        errorMsg: ""
      },
      email: {
        value: "",
        placeHolder: "Email",
        type: "email",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 8,
          isRequired: true,
          isEmail: false
        },
        errorMsg: ""
      },
      password: {
        value: "",
        placeHolder: "Password",
        type: "password",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 6,
          isRequired: true
        },
        errorMsg: ""
      }
    },
    signInControls: {}
  };


  inputHandler = (event, elementId) =>{
    //Updating all the state of the controls
    const updateSignUpControls ={
      ...this.state.signUpControls
    }

    //Updating the specific input state
    const updateSignUpElement ={
      ...updateSignUpControls[elementId]
    }

    //Then update the value
    updateSignUpElement.value= event.target.value;

    //Update the rules validation
    updateSignUpElement.valid = this.checkValidations(
      updateSignUpElement.value, 
      updateSignUpElement.validationRules
    );

    updateSignUpElement.touched = true;


    let formValid = true;

    for(let inputId in updateSignUpControls){
      formValid = updateSignUpControls[inputId].isValid && formValid;
    }


    updateSignUpControls[elementId] = updateSignUpElement;

    this.setState({
      signUpControls:updateSignUpControls,
      isValid: formValid
    });

  }

  signUpConfig (){

    let formElements = [];
    for (let key in this.state.signUpControls) {
      formElements.push({
        id: key,
        config: this.state.signUpControls[key]
      });
    }

    let signUpElements = formElements.map(el => {
      return(
        
        <Input
          key={el.id}
          wrapperclass="col s12 input-field"
          validate="validate"
          id={el.id}
          type={el.config.type}
          label={el.config.placeHolder}
          value={el.config.value}
          changeHandler={ event => this.inputHandler(event, el.id)}/>
      );
    });

    return signUpElements;
  }


  


  checkValidations = (value, rules) => {
    let isValid = true;

    if (rules.required) isValid = value.trim() !== "" && isValid;

    if (rules.minLenght) isValid = value.length >= rules.minLenght && isValid;

    if (rules.maxLenght) isValid = value.length <= rules.minLenght && isValid;

    return isValid;
  };

  render() {
    let signUpItems = this.signUpConfig();
    return (
      <div className={"row " + classes.SignUpContainer}>
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card horizontal hoverable">
            <div className={"card-image " + classes.SignupImage}>
              <img src={signUpImage} /> <a href="#"> I am already member </a>
            </div>
            <div className="card-stacked">
              <h3 className="card-title center-align"> Sign Up </h3>
              <div className="card-content">
                <form>
                  <div className="row">
                    
                  {signUpItems}
                    {/* <Input
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
                    /> */}
                  </div>
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span className={classes.Terms}>
                        I agree all statements in
                        <strong> Terms of service </strong>
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
