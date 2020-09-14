import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const surveyList = useSelector((state) => state.surveys);
  console.log(surveyList);
  useEffect(() => {
    dispatch(fetchSurveys());
  }, []);

  const renderSurveys = () => {
    return surveyList.reverse().map((survey) => {
      return (
        <div className="card darken-1" key={survey.title}>
          <div className="card-content">
            <h4>
              <span className="card-title">{survey.title}</span>
            </h4>
            <p>{survey.body}</p>
            <p className="right">
              Sent On : {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes : {survey.yes}</a>
            <a>No : {survey.no}</a>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div>{renderSurveys()}</div>
      <div className="fixed-action-btn">
        <Link to="/survey/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
