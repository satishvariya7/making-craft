import { REGISTER_ART, SET_TAB,PREVIEW_ART } from "../../constants/ActionTypes";

export function getRegisterArtData() {
  return { type: REGISTER_ART };
}

export const setRegisterArtData = (data) => {
  return (dispatch) =>
    dispatch({
      type: REGISTER_ART,
      payload: data,
    });
};

export const setTab = (data) => {
  return (dispatch) =>
    dispatch({
      type: SET_TAB,
      payload: data,
    });
};

export const preview_art = (data) => {
  return (dispatch) =>
    dispatch({
      type: PREVIEW_ART,
      payload: data,
    });
};
