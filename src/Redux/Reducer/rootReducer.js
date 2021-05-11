import {combineReducers} from 'redux'
import { productReducer, productIdReducer } from './ProductReducer'

const rootReducer = combineReducers({
    productReducer, productIdReducer
})

export default rootReducer