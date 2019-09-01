import React, { Component } from "react";
import FormSignUp from "../../../components/UI/Forms/FormSignUp/FormSignUp";
import StepOneSignUp from '../../../components/UI/Forms/FormSignUp/StepOneSignUp/StepOneSignUp'
export default class SignUp extends Component {

  state = {
    step: 1, 
    planSelected : null
  }

  clickStepOne = (plan) => {
    this.setState((prevState) => ({
      ...this.state,
      step: prevState.step + 1,
      planSelected : plan
    })); 

  }

  

  render() {
    let stepForm = null;
    if(this.state.step === 1){
      stepForm = <StepOneSignUp clickNextStepOne={this.clickStepOne}></StepOneSignUp>
    }else if(this.state.step === 2){
      stepForm = <FormSignUp plan={this.state.planSelected}/>
    }
    return stepForm;
  }
}
