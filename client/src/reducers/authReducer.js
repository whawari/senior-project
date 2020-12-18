import { FETCH_USER } from "../actions/types";

// null means we are not sure if the user is logged
// false means the user is not logged in
// if the user is logged in action.payload equals the user model object
export default function authReducer(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
