import { REGISTER_DATA } from "../../constants/ActionTypes";

const INIT_STATE = {
  registerData: null,
};

const commonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case REGISTER_DATA: {
      return {
        ...state,
        registerData: action.payload,
      };
    }
    default:
      return state;
  }
};
export default commonReducer;
