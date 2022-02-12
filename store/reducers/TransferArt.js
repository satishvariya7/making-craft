import { TRANSFER_ART, SELECTED_TAB } from '../../constants/ActionTypes'

const INIT_STATE = {
  transferArt: null,
  tab: 'shipping',
}

const commonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TRANSFER_ART: {
      return {
        ...state,
        transferArt: action.payload,
      }
    }
    case SELECTED_TAB: {
      return {
        ...state,
        tab: action.payload,
      }
    }
    default:
      return state
  }
}
export default commonReducer
