import { GET_USER, SET_USER, USER,TOKEN } from "../../constants/ActionTypes";

const INIT_STATE = {
  user: null,
};
const commonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER: {
      return state;
    }
    case SET_USER: {
      return { ...state, user: action.payload };
    }
    case USER: {
      return { ...state, user: action.payload };
    }
    case TOKEN: {
      return { ...state, token: action.payload };
    }
    default:
      return state;
  }
};
export default commonReducer;
