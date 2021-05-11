import React ,{useEffect} from 'react'
import axios from 'axios'
import {set_product} from '../Action/productAction'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'

function ProductListing() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res => dispatch(set_product(res.data)))
        .catch(error => error)
    }, [])
    
    const product = useSelector(state => state.productReducer.product)
      
    return (
        <div>
            Product Listing
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
