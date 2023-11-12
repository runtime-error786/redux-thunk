import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

import { Root } from "./reducer/Root";

import thunk from "redux-thunk";
let Storee =  configureStore(
    {
        reducer:Root
    },
    applyMiddleware(thunk)
    );

export {Storee};