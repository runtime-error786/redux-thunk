
import AsyncStorage from "@react-native-async-storage/async-storage"

let inc = (num)=>{
    return async (dispatch)=>{
        let q = await AsyncStorage.setItem("i","ssssssssssss");
        dispatch({type:"Increment",payload:num});
    }
}

let dec = (num)=>{
    return async (dispatch)=>{
        let q = await AsyncStorage.getItem("i");
        dispatch({type:"Decrement",payload:q});
    }
}

export {inc,dec};
