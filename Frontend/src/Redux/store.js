import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"

import {reducer as Datareducer} from "./DataReducer/reducer";
import {reducer as Userreducer} from "./UserReducer/reducer"


const rootReducer = combineReducers({
    data: Datareducer,
    user: Userreducer
   
  });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));