import { TRANSFER_ART, SELECTED_TAB } from '../../constants/ActionTypes'

export function TransferArt(transferData) {
  return { type: TRANSFER_ART, payload: transferData }
}
export function setTab(tab) {
  return { type: SELECTED_TAB, payload: tab }
}
