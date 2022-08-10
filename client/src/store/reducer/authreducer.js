import actionType from "../constant/constant"
const initialState = {
    userData: {
        email: '',
        uid: '',
        token: ''


    }
}
function authReducer(state = initialState, action) {
    switch (action.type) {

        case actionType.LOG_IN_USER:
            // console.log(action.payLoad.email)
            return ({
                ...state, userData: {
                    ...state.userData,
                    email: action.payLoad.email,

                    uid: action.payLoad.id,
                    token: action.payLoad.token


                }
            })
    }
    return state
}
export default authReducer