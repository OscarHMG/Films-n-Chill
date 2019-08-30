import React, { Component } from "react";
import HorizontalCard from "../../Card/HorizontalCard";
import classes from "../FormSignUp/FormSignUp.css";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import signInImage from '../../../../assets/images/login_image.png'
import { Link} from 'react-router-dom'

import {checkValidations} from '../../../../Util/InputValidations'

class FormSignIn extends Component {

  state ={
		formControls: {
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
          isRequired: true
        },
        errorMsg: null
      }
		},
		formIsValid: false, 
		rememberMe: false
	}

  signInConfig() {
    let formElements = [];
    for (let key in this.state.formControls) {
      formElements.push({
        id: key,
        config: this.state.formControls[key]
      });
    }

    let signUpElements = formElements.map(el => {
      return (
        <Input
          key={el.id}
          wrapperclass="col s12 input-field"
          id={el.id}
          type={el.config.type}
          label={el.config.placeHolder}
          placeHolder={el.config.placeHolder}
          value={el.config.value}
          error={el.config.errorMsg}
          changeHandler={event => this.inputHandler(event, el.id)}
        />
      );
    });

    return signUpElements;
	}
	
	inputHandler = (event, elementId) =>{
    //Updating all the state of the controls

    const updateSignUpControls ={
      ...this.state.formControls
    }

    //Updating the specific input state
    const updateSignUpElement ={
      ...updateSignUpControls[elementId]
    }

    //Then update the value
    updateSignUpElement.value= event.target.value;

    //Update the rules validation
    

    let errorObject = checkValidations(
      updateSignUpElement.value, 
      updateSignUpElement.validationRules,
    );
    
    //console.log(updateSignUpElement);

    updateSignUpElement.valid = errorObject.isValid;
    updateSignUpElement.errorMsg = errorObject.errorMessage;


    updateSignUpElement.touched = true;


    let formValid = true;

    for(let inputId in updateSignUpControls){
      formValid = updateSignUpControls[inputId].valid && formValid;
    }


    updateSignUpControls[elementId] = updateSignUpElement;

    this.setState({
      formControls:updateSignUpControls,
      formIsValid: formValid
    });

	}

  render() {
    let formElements = this.signInConfig();
    return (
      <HorizontalCard
        grid="col s12 m8 offset-m2 l6 offset-l3"
        hover="hoverable">
        <div className={"card-stacked " + classes.ContainerCardStacked}>
          <h3 className="card-title center-align">Sign in</h3>
          <div className={"card-content " + classes.Form}>
            <form>
              <div className={"row " + classes.RowForm}>{formElements}</div>
              <p>
                <label>
                  <input type="checkbox" onChange={this.onChecked} />
                  <span className={classes.Terms}>
                    
                    <strong> Remember me </strong>
                  </span>
                </label>
              </p>
              <div className="center-align">
                <Button
                  icon="input"
                  iconAlign="left"
                  type="submit"
                  className={classes.BtnSignUp}
                  disabled={!this.state.formIsValid}>
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
				<div className="card-image valign-wrapper">
					<div className="center-align">
						<img src={signInImage} className="responsive-img" /> 
						<div className="row">
							<Link to="/SignUp" className={classes.SignInText}>Create an account</Link>
						</div>
					</div>
        </div>						
			</HorizontalCard>
    );
  }
}

export default FormSignIn;