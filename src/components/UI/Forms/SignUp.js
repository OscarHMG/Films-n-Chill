import React, { Component } from "react";
import signUpImage from "../../../assets/images/video_streaming.png";
import signInImage from "../../../assets/images/login_image.png"
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
          isRequired: true,
          minLength: 8,
          
        },
        errorMsg: null
      },
      email: {
        value: "",
        placeHolder: "Email",
        type: "email",
        valid: false,
        touched: false,
        validationRules: {
          isRequired: true,
          isEmail: true
        },
        errorMsg: null
      },
      password: {
        value: "",
        placeHolder: "Password",
        type: "password",
        valid: false,
        touched: false,
        validationRules: {
          isRequired: true,
          minLength: 6
          
        },
        errorMsg: null
      }
    },
    signInControls: {
      email: {
        value: "",
        placeHolder: "Email",
        type: "email",
        valid: false,
        touched: false,
        validationRules: {
          isRequired: true,
          isEmail: true
        },
        errorMsg: null
      },
      password: {
        value: "",
        placeHolder: "Password",
        type: "password",
        valid: false,
        touched: false,
        validationRules: {
          isRequired: true,
          minLength: 6
          
        },
        errorMsg: null
      }
    }
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
    //updateSignUpElement.value= event.target.value;

    //Update the rules validation
    updateSignUpElement.valid = this.checkValidations(
      updateSignUpElement.value, 
      updateSignUpElement.validationRules
    );


    let errorObject = this.checkValidations(
      updateSignUpElement.value, 
      updateSignUpElement.validationRules,
      elementId
    );
    
    //console.log(updateSignUpElement);

    updateSignUpElement.valid = errorObject.isValid;
    updateSignUpElement.errorMsg = errorObject.errorMessage;


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

    console.log(updateSignUpControls);

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
          isValid = {this.state.signUpControls[el.id].valid}
          id={el.id}
          type={el.config.type}
          label={el.config.placeHolder}
          value={el.config.value}
          error={el.config.errorMsg}
          changeHandler={ event => this.inputHandler(event, el.id)}/>
      )});

    return signUpElements;
  }

  signInConfig (){

    let formElements = [];
    for (let key in this.state.signInControls) {
      formElements.push({
        id: key,
        config: this.state.signInControls[key]
      });
    }


   let signInElements= formElements.map(el => {
      return(
        
        <Input
          key={el.id}
          wrapperclass="col s12 input-field"
          validate="validate"
          isValid = {this.state.signInControls[el.id].valid}
          id={el.id}
          type={el.config.type}
          label={el.config.placeHolder}
          value={el.config.value}
          error={el.config.errorMsg}
          changeHandler={ event => this.inputHandler(event, el.id)}/>
      );
    });

    return signInElements;

  }


  checkValidations = (value, rules, elementID) =>{
    let isValid =true;
    let errorMessage = '';
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    

    if(rules.isRequired){
      isValid = value.trim() !== "" && isValid;
      
      errorMessage = (!isValid) ? "This field is required": null;
    }

    if(rules.minLength){
      isValid = value.length >= rules.minLength && isValid;
      errorMessage = !isValid ? "Min char is "+rules.minLength : null;
    }

    
    if(rules.isEmail){
      isValid = pattern.test(value) && isValid;
      errorMessage = !isValid ? "Email format is not valid": null;
    }

    errorMessage = isValid ? null: errorMessage;
    
    return {
      isValid,
      errorMessage
    }
  }

  setLeftSection(){
    let leftSection = null;
    if(this.state.isSignUpForm){
      leftSection = (
        <div className={"card-image " + classes.SignupImage}>   
          <img src={signUpImage} className={classes.ImgForm} /> 
          <a className={classes.Pointer} onClick={this.switchSignUpHandler}> I am already member </a>
        </div>);
    }else{
      leftSection = (
        <div className={"card-image " + classes.SignupImage}>   
          <img src={signInImage} className={classes.ImgForm} /> 
          <a className={classes.Pointer} onClick={this.switchSignUpHandler}> Create an account </a>
        </div>
      );
    }

    return leftSection;
  }
  

  setForm(){
    let formElements;
    if(this.state.isSignUpForm){
      formElements = this.signUpConfig();
    }else{
      formElements = this.signInConfig();
    }

    return formElements;
  }

  switchSignUpHandler = () =>{
    this.setState( prevState  =>{
      return{
        isSignUpForm:  ! prevState.isSignUpForm
      }
      
    });
  }


  

  render() {
    let items = this.setForm();
    return (
      <div className={"row " + classes.SignUpContainer}>
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card horizontal hoverable">
            {this.setLeftSection()}
            <div className="card-stacked">
              <h3 className="card-title center-align"> {this.state.isSignUpForm ? "Sign Up": "Sign In"} </h3>
              <div className="card-content">
                <form>
                  <div className="row">
                    
                  {items}
                    
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
                    icon={this.state.isSignUpForm ? "how_to_reg" : "input"}
                    iconAlign="left"
                    type="submit"
                    disabled={this.state.isValid}
                  >
                    {this.state.isSignUpForm? "Register" : "Login"}
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
