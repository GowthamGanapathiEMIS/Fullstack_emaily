//to fill the form
import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import validateEmail from "../../utils/validateEmail";

import { SurveyField } from "./SurveyField";

export const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "recipients" },
];

const SurveyForm = (props) => {
  const { handleSubmit, changeView } = props;
  const renderField = () => {
    return _.map(FIELDS, (field) => {
      return (
        <Field
          key={field.label}
          label={field.label}
          type="text"
          name={field.name}
          component={SurveyField}
        />
      );
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(changeView)}>
        {renderField()}
        <Link to="/survey" className="red btn-flat left white-text">
          Cancel
        </Link>

        <button className="teal btn-flat right white-text" type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  errors.recipients = validateEmail(values.recipients || " ");
  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = `Please provide ${name}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
