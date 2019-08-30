import React, { Component } from "react";
import classes from './SingIn.css'

class StepOneSignUp extends Component {


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
    //col s12 m8 offset-m2 l6 offset-l3
    return (
			<div>
				<div className="row">
					<div className="col m4 offset-m2">
						<div id="standardPlan" className={"card hoverable "+classes.Pointer} style={{backgroundColor: this.state.standardColorInactive}} onClick={() => this.selectPlan("standardPlan")}>
							<div className="card-content black-text">
								<span className={"card-title " +classes.CenterTittle}><strong>Standard</strong></span>
								<div className={"row "+classes.PlanDescription}>
									<ul>
										<li className="row">
											<span><i className={"material-icons left teal-text lighten-2"}>check</i></span>
											<span>HD available</span>
										</li>
										<li className={"row "+classes.DisabledTextColor}>
											<span><i className={"material-icons left "+classes.DisabledTextColor}>clear</i></span>
											<span>Ultra HD available</span>
										</li>
										

										<li className="row">
											<span><i className={"material-icons left teal-text lighten-2"}>check</i></span>
											<span>Unlimited movies and TV shows</span>
										</li>

										<li className="row">
											<span><i className={"material-icons left teal-text lighten-2"}>attach_money</i></span>
											<span>Monthly price: $ 6.00</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col m4">
					<div id="premiumPlan" className={"card hoverable "+classes.Pointer} style={{backgroundColor: this.state.premiumColorInactive}}  onClick={() => this.selectPlan("premiumPlan")}>
							<div className="card-content black-text">
								<span className={"card-title " +classes.CenterTittle}><strong>Premium</strong></span>
								<div className={"row "+classes.PlanDescription}>
									<ul>
										<li className="row">
											<span><i className={"material-icons left teal-text lighten-2"}>check</i></span>
											<span>HD available</span>
										</li>
										<li className={"row "}>
											<span><i className={"material-icons left teal-text lighten-2"}>check</i></span>
											<span>Ultra HD available</span>
										</li>
										

										<li className="row">
											<span><i className={"material-icons left teal-text lighten-2"}>check</i></span>
											<span>Unlimited movies and TV shows</span>
										</li>

										<li className="row">
											<span><i className={"material-icons left teal-text lighten-2"}>attach_money</i></span>
											<span>Monthly price: $ 10.00</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={"row center-align "+classes.DisabledTextColor}>
					*HD and Ultra HD availability subject to your Internet service and device capabilities.
				</div>
				<div className="row center-align">
					<a className={"waves-effect waves-light btn-large " +classes.ButtonWidth}>CONTINUE</a>
				</div>
			</div>
    );
  }
}

export default StepOneSignUp;
