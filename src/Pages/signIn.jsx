import React, {useState, useEffect} from 'react'
import {Box, Button, Stack, Snackbar, Card,
    Typography, TextField, Select, MenuItem} from '@mui/material';
import Menu from '../Components/side/menu'


const style={
 display: 'inline-block',
  mx: '2px',
  padding: '50px',
   transform: 'scale(0.8)' ,
   minWidth: '350px',
   borderRadius: '15px'
}
const tstyle={
    padding: '5px'
}

const SignIn=()=>{
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()

    return(
        <div className="mainBckgrnd ">
        
        <Menu/>
        
             <div className="rightSide topView">

                  <Typography>Welcome!</Typography>    
        <Card  sx={style}>
        <form>
            <Typography>Sign In</Typography>
<label>Email</label>
<TextField sx={tstyle} onChange={(e)=>{setEmail(e.target.value)}}
type="email" value={email}>

</TextField>
<br></br>
<label>Password</label>
<TextField sx={tstyle} onChange={(e)=>{setPassword(e.target.value)}}
type="password" value={password}>
 
</TextField>
<button type ="submit"> Login</button>


        </form>
        </Card>
        </div>
        </div>
    )
}

export default SignIn