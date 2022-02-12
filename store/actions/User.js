import { GET_USER, SET_USER,TOKEN } from "../../constants/ActionTypes";

export function getUser() {
  return { type: GET_USER };
}

export const setUser = (user) => {
  return (dispatch) =>
    dispatch({
      type: SET_USER,
      payload: user,
    });
};

export const token=(token)=>{
  return (dispatch) =>
    dispatch({
      type: TOKEN,
      payload: token,
    });
}