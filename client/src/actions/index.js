import axios from "axios";
import { FETCH_USER } from "./types";

const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

const handleToken = (token) => async (dispatch) => {
  console.log(token);
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export { fetchUser, handleToken };
