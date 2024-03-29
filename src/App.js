import React from "react";
import "./index.css";
import SignUp from './containers/pages/SignUpPage/SignUp'
import { Route, Switch} from "react-router-dom";
import MainTemplate from "./containers/MainTemplate/MainTemplate";
import Home from './containers/pages/HomePage/Home'
import SignIn from './containers/pages/SignInPage/SignIn'
import Main from './containers/pages/MainPage/Main'


function App() {
  return (
    <div className="">
      <MainTemplate>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/home" exact component={Main} />
        </Switch>
      </MainTemplate>
    </div>
  );
}

export default App;
