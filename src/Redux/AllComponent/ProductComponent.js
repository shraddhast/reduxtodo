import React from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";



function ProductComponent() {
  const useStyles = makeStyles({
    media:{
      width:"150px",
      marginLeft:"27%",
      paddingTop:"5%"
    },
    grid:{
        marginTop:"1%"
    }
  });
  const classes = useStyles();
  const products = useSelector((state) => state.productReducer.product);

  return (
    <div>  Product Component

            <Grid container justify="center" spacing={4} className={classes.grid}>
             {
                products.map((prod) =>( 
                <Grid item xs={6} md={3} lg={3} key={prod.id}>
                    <Link to = {`/product/${prod.id}`}> 
                    <Card>
                      <CardActionArea>
                        <CardMedia className={classes.media} component="img" image={prod.image} title={prod.title} /> 
                        <CardContent>
                          <Typography variant="h5" component="h2">Price: {prod.price}$ </Typography>
                          <Typography variant="body2" color="textSecondary" component="p" >{prod.description}</Typography>
                        </CardContent>
                     </CardActionArea>
     
                      <CardActions>
                        <Button size="small" color="primary">Share</Button>
                        <Button size="small" color="primary"> Learn More</Button>
                      </CardActions>
                    </Card>
                    </Link>
                    
                </Grid>
                ))}         
            </Grid>
    </div>
  );
            }

export default ProductComponent;
