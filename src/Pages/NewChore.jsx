import React, {useState} from 'react'
import Menu from '../Components/side/menu'
import {Box, Card, CardActions, CardContent, Button,
    Typography, Modal, TextField, Select, MenuItem} from '@mui/material';
import { projFirestore } from '../firebase/config';
import moment from 'moment';
import {timestamp} from '../firebase/config'


    const style = {
        position: 'absolute',
        top: '40%',
        left: '60%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #0300',
        borderRadius: '13px',
        boxShadow: 10,
        p: 6,
      };

const NewChore=()=>{
    const [fill, setFill]=useState()
    const [number, setNumber]=useState(1)
    const [length, setLength]=useState(604800)
    const [name,setName]=useState()
  const createdAt =timestamp.fromDate(new Date())

const addChore=async (e)=>{
    e.preventDefault()
    console.log(e)
    try{
        projFirestore.collection('chores').add({
            importance: 1,
            lastCompleted: createdAt,
            name: name,
            repeat: true,
            timePeriod: number*length,
            history: createdAt
        })   
    }catch(err){
        console.log(err)
    }

}

//console.log(createdAt)
// console.log(    moment.unix(new Date())._d )
    return(
        <div className="mainBckgrnd ">
        
        <Menu/>
        
                  <div className="rightSide newBckgrnd  topView">
    <br></br>
    <br></br>
    <Box sx={style}>

<form 
 onSubmit={(e)=>{addChore(e)}}> 
          
          <div style={{
    
    display: 'block',
    width: 'fit-content'
  }}> 
 

</div>

<Typography variant="h5">
    Add New Chore
</Typography>
<br></br>
<Typography>
   Name
</Typography>

  <TextField variant='outlined' label="Name"
  onChange={(e)=>{setName(e.target.value)}}
  ></TextField>
  <Typography>
    How often do you want to complete this task?
</Typography>
  <Select  value={number} onChange={(e)=>{setNumber(e.target.value)}} >
      <MenuItem  value="1">1 </MenuItem >
      <MenuItem  value="2">2 </MenuItem >
      <MenuItem  value="3" >3 </MenuItem >
      <MenuItem  value="4" >4 </MenuItem >
      <MenuItem  value="5" >5 </MenuItem >
      <MenuItem  value="6" >6 </MenuItem >
  </Select>
  <Select  value={length} onChange={(e)=>{setLength(e.target.value)}} >
      <MenuItem  value="604800">Week(s) </MenuItem >
      <MenuItem  value="2629743 ">Month(s)</MenuItem >
     
  </Select>
<br></br>

  <Button className="devAddBtn" type="submit">Submit</Button>

          
          </form>


         </Box>
</div>
</div>

    )
}
export default NewChore