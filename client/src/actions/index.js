import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

const submitSurvey = (survey, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", survey);
  history.push("/survey");
  dispatch({ type: FETCH_USER, payload: res.data });
};

const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export { fetchUser, handleToken, submitSurvey, fetchSurveys };
