import React from 'react'
import axios from 'axios'
import { selected_product, remove_selected_product } from '../Action/productAction'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Paper, Typography , Box} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function ProductDetails() {

    const product = useSelector(state => state.productIdReducer)
    const { productId } = useParams()
    const dispatch = useDispatch()
    console.log(product)

    const {title, price, image, description } = product

    const useStyles = makeStyles({
        heading:{
            fontSize:'xx-large',
            color:"white",
            background:"pink"
        },
        images:{
            width:"30%",
            height:"100%",
            margin:"3%",
        },
        price:{
            paddingTop:"3%"
        },
        desc:{
            paddingTop:"3%",
        },
        button:{
            marginTop:"5%",
            marginBottom:"5"
        },
        box:{
            margin:"5%",
            padding: "5%"
        }
    });
    const classes = useStyles();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(res => dispatch(selected_product(res.data))) 
        .catch(error => error)
        return()=>{
            dispatch(remove_selected_product())
        }
    }, [productId])
   
    return (
        <div>
            <Typography className={classes.heading}>ProductDetails</Typography>
            
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={6} spacing={4}>
                    {/* <Box border={1} borderColor="primary.main" borderRadius="5px"> */}
                        <img className={classes.images} src={image} />
                    {/* </Box>   */}
                </Grid>
              
                <Grid item xs={12} md={6} lg={6}>
                    <Box border={1} borderColor="primary.main" borderRadius="5px" className={classes.box}> 
                        <Typography className={classes.titles} variant="h6"> {title}</Typography>
                        <Typography className={classes.price}> Price:{price}$</Typography>
                        <Typography className={classes.desc} justify="center">{description}</Typography>
                        <Button variant="contained" color="secondary" startIcon={<ShoppingCartIcon/>} 
                        className={classes.button}> Add to Cart</Button>
                    </Box>
                </Grid>
               
            </Grid>

        </div>
    )
}

export default ProductDetails
