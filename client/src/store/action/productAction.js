import * as api from '../../api/index'
import actionType from '../constant/constant'
export const getAllProduct = () => async (dispatch) => {
    try {
        const {data} = await api.getProducts()
        dispatch({ type: actionType.GET_PRODUCT, payload: data })
    }
    catch (e) {
        console.log('error' , e.message)
    }
}
