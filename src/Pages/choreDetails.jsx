import react, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import { projFirestore } from '../firebase/config'
import { format } from 'date-fns/fp'
import Menu from '../Components/side/menu'
import '../cssFolder/choreDetail.css'
import moment from 'moment'
import {Box, Card, CardActions, CardContent, Button,
     Typography, Modal, TextField, Select, MenuItem} from '@mui/material';
     import { BiCalendarStar } from "react-icons/bi";
    

     const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };  


const ChoreDetails =()=>{
    const[chore, setChore]=useState()
    const[isPending, setIsPending]=useState(false)
    const[error, setError]=useState(false)
    const [number, setNumber]=useState(1)
    const [length, setLength]=useState(604800)
    const [desc, setDesc]=useState()
    const {id}=useParams()
    const [open, setOpen] = useState(false);
    const [avg, setAvg]=useState(0)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        setIsPending(true)
  


        projFirestore.collection('chores').doc(id).get().then((doc)=>{
           if(doc.exists){
setIsPending(false)
setChore(doc.data())
setDesc(doc.data().history.reverse())
console.log(doc.data())
let n=0
doc.data().history.map(t=>
         
    n+=t.seconds ) 
    console.log(n)
    console.log(doc.data().history.length)
    setAvg(n/(doc.data().history.length))
    return avg



           }
           else{
               setIsPending(false)
               setError('could not find details')
           }
        })
    },[id])
// const getDateAverage=()=>{
   
//     chore.history.map(t=>
         
//         avg+=t.seconds ) 
//         return avg
//     }

  const handleConsistency =()=>{
    projFirestore.collection('chores').doc(id).update({
        timePeriod: (number* length)
    })
  }


if(chore && desc)
    return(
        <div className="mainBckgrnd ">
        
        <Menu/>
        
                  <div className="rightSide topView marginChoreDetail">



<Card sx={{ minWidth: 275 }}>
      <CardContent>
     <Typography variant="h5" >
      {chore.name}
        </Typography>
     <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Last Completed:
    {chore.lastCompleted.toDate().toDateString()}
        </Typography>
      
     
             <Button onClick={handleOpen}>
             Complete every: 
    { chore.timePeriod<3628800 &&
     ' ' +moment.duration(chore.timePeriod*1000).asWeeks().toFixed()+ ' weeks' }
     { chore.timePeriod>=3628800 &&
     ' ' + moment.duration(chore.timePeriod*1000).asMonths().toFixed()+ ' months' }
                 </Button>
                 <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>

<form className="noteForm"
 onSubmit={handleConsistency}> 
          
          <div style={{
    
    display: 'block',
    width: 'fit-content'
  }}> 
 

</div>
<br></br>
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

  <Button className="devAddBtn" type="submit">Submit</Button>

          </form>

         </Box>
                 </Modal>
                 
                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {console.log(chore.history[0])}
        <Typography variant="h5">
            History
        </Typography>
        <div className="calFlex"> 
        
        {desc.map(m=>{
            return(
           <p key={m.id} style={{margin: '-1px'}}>  {moment(m.seconds*1000).format("MMM Do YYYY")}  <BiCalendarStar/> </p>
          )})
        }
         </div> 
        </Typography>
     <Typography>
         Average completion time:
      {avg}
     </Typography>
      
      </CardContent>
    </Card>


</div>


        </div>
    ); else return(
<div>
    <h4> Loading...</h4>
</div>
    )

}


export default ChoreDetails  