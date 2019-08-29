import React from "react";
import "./index.css";
import SignUp from './components/UI/Forms/SignUp'
import { Route, Switch} from "react-router-dom";
import MainTemplate from "./containers/MainTemplate/MainTemplate";
import HomePage from './containers/HomePage/HomePage'


function App() {
  return (
    <div className="">
      <MainTemplate>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signIn" exact component={SignUp} />
          
        </Switch>
      </MainTemplate>
    </div>
  );
}

export default App;
