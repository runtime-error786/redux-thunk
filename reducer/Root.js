import { IN } from "./INC";
import { DE } from "./DEC";

import { combineReducers } from "redux";

let Root = combineReducers(

    {
        IN:IN,
        DE:DE
    }
)

export {Root};