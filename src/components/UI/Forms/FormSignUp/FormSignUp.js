import React, { Component } from "react";
import HorizontalCard from "../../Card/HorizontalCard";
import Input from "../../Input/Input";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import signUpImage from "../../../../assets/images/video_streaming.png";
import classes from './FormSignUp.css';
import { checkValidations } from '../../../../Util/InputValidations'


class FormSignUp extends Component {
  state = {
    formControls: {
      fullName: {
        value: "",
        placeHolder: "Full name",
        type: "text",
        valid: false,
        touched: false,
        validationRules: {
          isRequired: true,
          minLength: 8
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
		acceptedTerms: false,
		formIsValid: false
  };




  signUpConfig() {
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
	

	onChecked = () =>{

		this.setState({
			acceptedTerms: !this.state.acceptedTerms
      
		});
		
  }
  
  registerHandler = (event) =>{
    event.preventDefault();

    //HERE IS THE HTTP REQUEST TO REGISTER THE USER.
    console.log(this.props.plan);
    console.log(this.state)
  }

  render() {
    const formElements = this.signUpConfig();

    return (
      <HorizontalCard grid="col s12 m8 offset-m2 l6 offset-l3" hover="hoverable">
        <div className="card-image valign-wrapper">
					<div className="center-align">
						<img src={signUpImage} className="responsive-img" /> 
						<div className="row">
							<Link to="/SignIn" className={classes.SignInText}>I'm already a member</Link>
						</div>
					</div>
        </div>
				
        <div className={"card-stacked "+classes.ContainerCardStacked}>
          <h3 className="card-title center-align">Sign up</h3>
          <div className={"card-content "+classes.Form}>
            <form onSubmit={this.registerHandler}>
              <div className={"row "+classes.RowForm}>{formElements}</div>
              <p >
                <label>
                  <input type="checkbox" onChange={this.onChecked}/>
                  <span className={classes.Terms}>
                    I agree all statements in
                    <strong> Terms of service </strong>
                  </span>
                </label>
              </p>
							<div className="center-align">
								<Button
									icon="how_to_reg"
									iconAlign="left"
									type="submit"
									className={classes.BtnSignUp}
									disabled={!this.state.formIsValid || !this.state.acceptedTerms}>
									Register
									</Button>
								</div>
            </form>
          </div>
        </div>
      </HorizontalCard>
    );
  }
}

export default FormSignUp;
