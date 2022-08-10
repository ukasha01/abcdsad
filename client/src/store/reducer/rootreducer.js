import { combineReducers } from "redux";
// import authReducer from "./authreducer";
import productReducer from "./productReducer";
// import carReducer from "./carReducer";
const rootReducer = combineReducers({
    productReducer,
})
export default rootReducer