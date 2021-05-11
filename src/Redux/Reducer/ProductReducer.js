import {SET_PRODUCTS,SELECTED_PRODUCTS,REMOVE_SELECTED_PRODUCTS} from '../Action/ActionType'
const initialState ={
    product:[]
    
}

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS :
            const { payload } = action
            return { 
                ...state,
                product: payload
            }
            default : return state
        }    
}

export const productIdReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECTED_PRODUCTS :
            const { payload } = action
            return { 
                ...state,
                ...payload
            }
        case  REMOVE_SELECTED_PRODUCTS:{
            return {
                
            }
        }
            default : return state
        }    
}

