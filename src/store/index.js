import { createStore, combineReducers } from "redux";
import { linkReduser } from './linkReduser'

const rootReduser = combineReducers({
  link: linkReduser,
})

export const store = createStore(rootReduser)