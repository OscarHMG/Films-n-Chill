import React, { Component } from "react";
import classes from './StepOneSignUp.css'
import Button from '../../../Button/Button'

const STANDARD_PLAN = 'STANDARD_PLAN';
const PREMIUM_PLAN = 'PREMIUM_PLAN';

class StepOneSignUp extends Component {

	state = {
		planSelected: null
	}

	selectPlan = (plan) =>{
		this.setState({
			...this.state,
			planSelected: plan
		});


	}



  render() {
    return (
			<div>
				<div className="row">
					<div className="col m4 offset-m2">
						<div id="standardPlan" className={"card hoverable "+classes.Pointer} onClick={() => this.selectPlan(STANDARD_PLAN)}>
							<div className="card-content black-text">
								<span className={"card-title " +classes.CenterTittle}>
									<strong>Standard</strong>
									{this.state.planSelected === STANDARD_PLAN ?<span className="red new badge" data-badge-caption="Plan Selected"></span> : null}</span>
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
					<div id="premiumPlan" className={"card hoverable "+classes.Pointer}  onClick={() => this.selectPlan(PREMIUM_PLAN)}>
							<div className="card-content black-text">
								<span className={"card-title " +classes.CenterTittle}>
									<strong>Premium</strong>
									{this.state.planSelected === PREMIUM_PLAN ?<span className="red new badge" data-badge-caption="Plan Selected"></span> : null}</span>
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
					<Button className={"waves-effect waves-light btn-large " +classes.ButtonWidth} 
						clicked={() => this.props.clickNextStepOne(this.state.planSelected)}
						disabled={this.state.planSelected === null}
						iconAlign="" 
						icon="">CONTINUE</Button>
				</div>
			</div>
    );
  }
}

export default StepOneSignUp;
