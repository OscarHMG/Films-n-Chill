import React, { Component } from "react";
import FormSignIn from "../../../components/UI/Forms/FormSignIn/FormSignIn";
import classes from './SingIn.css'

class SignIn extends Component {


	state = {
		premiumColorInactive: '#f2f2f2',
		standardColorInactive: '#f2f2f2'
	}

	selectPlan = (plan) =>{
		if(plan === 'standardPlan'){
			this.setState({
				standardColorInactive: 'white',
				premiumColorInactive : '#f2f2f2'
			});
			console.log('standard', this.state)
		}else{
			this.setState({
				standardColorInactive : '#f2f2f2',
				premiumColorInactive: 'white'
			});

			console.log('premium', this.state)
		}
	}



  render() {
    return (
			 <FormSignIn></FormSignIn>
    );
  }
}

export default SignIn;
