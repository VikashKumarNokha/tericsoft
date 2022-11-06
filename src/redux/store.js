import { applyMiddleware, legacy_createStore, combineReducers, compose } from "redux";
//import { reducer  as UsersReducer} from "./users/reducer";
 import { reducer as AdminReducer}  from "./admin/reducer"
import thunk from "redux-thunk";
const rootstore = { AdminReducer}; 

const composeEnhancer = window.
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = legacy_createStore(combineReducers(rootstore), composeEnhancer( applyMiddleware(thunk)));

export { store };

