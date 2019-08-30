import React from "react";
import "./index.css";
import SignUp from './containers/pages/SignUpPage/SignUp'
import { Route, Switch} from "react-router-dom";
import MainTemplate from "./containers/MainTemplate/MainTemplate";
import Home from './containers/pages/HomePage/Home'
import SignIn from './containers/pages/SignInPage/SignIn'


function App() {
  return (
    <div className="">
      <MainTemplate>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/signIn" exact component={SignIn} />
          
        </Switch>
      </MainTemplate>
    </div>
  );
}

export default App;
