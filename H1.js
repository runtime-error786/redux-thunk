import React from "react";
import {Text,Button} from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { inc } from "./action";
let FG = ()=>{
    let inc1 = useSelector((State)=>State.IN);
    let d1 = useDispatch();
return(
    <>
        <Text>hello mustafa{inc1}</Text>
        <Button title="hello" onPress={()=>{
            d1(inc(1));
        }}></Button>
    </>
)
}

export {FG};