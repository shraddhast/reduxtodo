import { AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

function Header() {
    const useStyles = makeStyles((theme) => ({
       AppBar:{
            fontSize:"x-large"
       } 
      }));
      const classes = useStyles();
    return (
        <div >
            <AppBar position="static" className={classes.AppBar}>
            Fake Shop
            </AppBar>
            
        </div>
    )
}

export default Header
