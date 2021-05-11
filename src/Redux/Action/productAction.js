import {SET_PRODUCTS, SELECTED_PRODUCTS, REMOVE_SELECTED_PRODUCTS }  from './ActionType'

export const set_product = (product) => {
    return {
        type: SET_PRODUCTS,
        payload: product
    }
}
export const selected_product = (product) => {
    return {
        type:SELECTED_PRODUCTS,
        payload:product        
    }
}
export const remove_selected_product = () => {
    return {
        type: REMOVE_SELECTED_PRODUCTS
    }
}