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
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
    }



    return(
        <div className="mainBckgrnd ">
        
        <Menu/>
        
             <div className="rightSide topView">

                  <Typography>Welcome!</Typography>    
        <Card  sx={style}>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <Typography>Sign In</Typography>
<label>Email</label>
<TextField sx={tstyle} onChange={(e)=>{setEmail(e.target.value)}}
type="text" value={email}>

</TextField>
<br></br>
<label>Password</label>
<TextField sx={tstyle} onChange={(e)=>{setPassword(e.target.value)}}
type="password" value={password}>
 
</TextField>
<br></br>
<Button type ="submit" variant="outlined"> Login</Button>


        </form>
        </Card>
        </div>
        </div>
    )
}

export default SignIn