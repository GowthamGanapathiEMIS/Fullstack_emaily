import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import { fetchUser } from "../actions";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import SurveyFormReview from "./surveys/SurveyFormReview";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={Header} />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/survey" exact component={Dashboard} />
            <Route path="/survey/new" exact component={SurveyNew} />
            <Route
              path="/survey/confirmation"
              exact
              component={SurveyFormReview}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
