import { combineReducers } from 'redux'
import Common from './Common'
import Settings from './Settings'
import User from './User'
import Register from './Register'
import RegisterArt from './RegisterArt'
import TransferArt from './TransferArt'

const reducers = combineReducers({
  common: Common,
  settings: Settings,
  user: User,
  register: Register,
  registerArt: RegisterArt,
  transferArt: TransferArt,
})

export default reducers
