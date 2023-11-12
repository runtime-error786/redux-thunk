let init = 0;
import AsyncStorage from "@react-native-async-storage/async-storage";

let IN = (state=init,action)=>{
    if(action.type == "Increment")
    {
        return state + 1;
    }
    else{
        return state;
    }
}


export {IN};