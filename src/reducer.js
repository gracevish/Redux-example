const initState={
    data:["fruits","veggies"]
}

const reducer=(state=initState,action)=>{
const newState={...state};
switch (action.type) {
    case "UPDATEDATA":
        newState.push(action.data);
        return newState;
        default:
            return state;
}
}
export default reducer;