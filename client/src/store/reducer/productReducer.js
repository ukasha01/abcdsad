import actionType from '../constant/constant'

const initialState = {
    product: []
}
function productReducer(state = initialState, action) {
    
    switch (action.type) {
        case actionType.GET_PRODUCT:
            // console.log(action.payLoad.email)
            return ({
                ...state,
                product: [...action.payload]

            }
            )
    }
    return state
}
export default productReducer