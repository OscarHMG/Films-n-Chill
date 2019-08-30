import React, { Component } from "react";
import FormSignUp from "../../../components/UI/Forms/FormSignUp/FormSignUp";
import StepOneSignUp from '../../../components/UI/Forms/FormSignUp/StepOneSignUp'
export default class SignUp extends Component {

  state = {
    step: 1
  }


  render() {
    let stepForm = null;
    if(this.state.step === 1){
      stepForm = <StepOneSignUp/>
    }else if(this.state.step === 2){
      stepForm = <FormSignUp/>
    }
    return ;
  }
}
