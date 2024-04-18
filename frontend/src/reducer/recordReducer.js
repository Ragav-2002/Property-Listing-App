export default function recordReducer(state, action){
    switch(action.type){
        case 'GET_RECORDS' : {
            return {...state, data: [...action.payload], loading: false}
        }case 'ERROR' : {
            return {...state, errors: action.payload, loading: false}
        }case 'CREATE_RECORD' : {
            return {...state, data: [...state.data, action.payload]}
        }case "UPDATE_RECORD" : {
            return {...state, data: state.data.map(ele=>{
                if(ele._id==action.payload._id){
                    return {...action.payload}
                }else{
                    return {...ele}
                }
            })}
        }case 'DELETE_RECORD' : {
            return {...state, data: state.data.filter(ele=>ele._id!==action.payload)}
        }
        default: {
            return {...state}
        }
    }
}