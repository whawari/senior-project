import axios from "axios";
import { FETCH_USER } from "./types";

// action creator
// will be dispatched to reducers
export const fetchUser = () => async (dispatch) => {
  const current_user = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: current_user.data });
};
// it can be refactored to
// export const fetchUser = () => async (dispatch) =>
//   dispatch({ type: FETCH_USER, payload: await axios.get("/api/current_user") });
