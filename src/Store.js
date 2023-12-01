import { createStore } from "redux";
import { onOffReducer } from "./reducer/onOffReducer";

const store = createStore(onOffReducer);

export default store;
