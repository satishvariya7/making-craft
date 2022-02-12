import { REGISTER_DATA } from "../../constants/ActionTypes";

export function getRegisterData() {
  return { type: REGISTER_DATA };
}

export const setRegisterData = (data) => {
  return (dispatch) =>
    dispatch({
      type: REGISTER_DATA,
      payload: data,
    });
};
