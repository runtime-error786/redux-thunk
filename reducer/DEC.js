let init = "";

let DE = (state=init,action)=>{
    if(action.type == "Decrement")
    {
        return action.payload;
    }
    else{
        return state;
    }
}

export {DE};