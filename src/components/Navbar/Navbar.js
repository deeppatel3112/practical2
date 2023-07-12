import React from 'react'
import {AppBar, Typography, Toolbar, Tab,Tabs, Button} from '@mui/material'
import { Link } from 'react-router-dom'
// import AppBar from '@mui/material';
import './Style.css'



function Navbar() {
  return (

   <AppBar  position="static" color="inherit"> 
    <Toolbar className='appbar'>
      <Typography className='typography' component={Link} to='/' variant="h4" align="center">
        Charusat
      </Typography>
      <Typography className='tabs' style={{marginLeft: '950px'}} component={Link} to='/About' variant="h6">
        About Us
      </Typography>
      <Typography className='tabs' component={Link} to='/Contact' variant="h6">
        Contact
      </Typography>
    </Toolbar>
   </AppBar>

  )
}

export default Navbar
