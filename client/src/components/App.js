import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import { fetchUser } from "../actions";
import Landing from "./Landing";
const SurveyNew = () => <h2>SurveyNew</h2>;
const DashBoard = () => <h2>DashBoard</h2>;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/survey" exact component={DashBoard} />
          <Route path="/survey/new" exact component={SurveyNew} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
