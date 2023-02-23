const currentUserReducer = (state = null, action) => {
    switch(action.type){
        case 'FTECH_CURRENT_USER':
            return action.payload
        default:
            return state
    }
}

export default currentUserReducer