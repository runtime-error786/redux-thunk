import React from "react";
import {Text} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { dec } from "./action";
let FG1 = ()=>{
    let r1 = useSelector((State)=>State.DE);
    let r2 = useDispatch();
    r2(dec(1));
return(
    <>
        <Text>hello musafa {r1}</Text>
    </>
)
}

export {FG1};