import { REGISTER_ART ,SET_TAB,PREVIEW_ART} from "../../constants/ActionTypes";



const INIT_STATE = {
  registerArt: null,
  tab:"addPhoto",
  preview_art:null,
};

const commonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case REGISTER_ART: {
      return {
        ...state,
        registerArt: action.payload,
      };
    }
    case SET_TAB:{
      return {
        ...state,
        tab: action.payload,
      };
    }
    case PREVIEW_ART:{
      return{
        ...state,
        preview_art:action.payload,
      }
    }
    default:
      return state;
  }
};
export default commonReducer;
