//shows survey new form
import React, { useState } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

const SurveyNew = () => {
  const [showReviewForm, setshowReviewForm] = useState(false);

  const changeView = () => {
    setshowReviewForm(!showReviewForm);
  };
  const renderContent = () => {
    return showReviewForm ? (
      <SurveyFormReview changeView={changeView} />
    ) : (
      <SurveyForm changeView={changeView} />
    );
  };

  return <div>{renderContent()}</div>;
};
export default reduxForm({ form: "surveyForm" })(SurveyNew);
