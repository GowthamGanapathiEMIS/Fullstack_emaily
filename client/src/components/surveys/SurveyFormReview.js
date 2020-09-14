import React from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { FIELDS } from "./SurveyForm";
import { submitSurvey } from "../../actions";
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ changeView, history }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);
  const entered = state.surveyForm.values;

  const renderHelper = () => {
    return _.map(FIELDS, (item) => {
      return (
        <div key={item.label}>
          <label>
            <h5>{item.label}</h5>
          </label>
          <div>
            <p>{entered[item.name]}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h5>Please Confirm your entries</h5>
      <div style={{ margin: "10px" }}>{renderHelper()}</div>
      <button
        className="yellow darken-3 white-text darken-3 btn-flat left"
        onClick={changeView}
      >
        Go back
      </button>
      <button
        className="green white-text darken-3 btn-flat right"
        onClick={() => dispatch(submitSurvey(entered, history))}
      >
        Submit
      </button>
    </div>
  );
};

export default withRouter(SurveyFormReview);
