import React, {useState, useEffect} from 'react'
import { projFirestore , timestamp, arrayUnion, firebase} from '../firebase/config'
import {Link, useNavigate, useParams } from 'react-router-dom'
import '../cssFolder/main.css'
import Menu from '../Components/side/menu'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';




const Main=()=>{
let nav=useNavigate()
const createdAt =timestamp.fromDate(new Date())
    const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
    const {id}=useParams
    const[data, setData]=useState()
    const[isPending, setIsPending]=useState(false)
    const[error, setError]=useState(false)
    const[ct, setCT]=useState(new Intl.DateTimeFormat('en-US').format)
  const[timeNowString, setTimeNowString]=useState(new Date().getTime())

useEffect(()=>{
setIsPending(true)
projFirestore.collection('chores').get().then((snapshot)=>{
if(snapshot.empty){
    setError('no chores available')
    setIsPending(false)
}else{
    let results=[]
    snapshot.docs.forEach(doc=>{
        results.push({id: doc.id, ...doc.data()})
    })
    setData(results)
setIsPending(false)
}

}).catch(err=>{
    setError(err.messsage)
    setIsPending(false)
})


},[])
const completeTask=(iD)=>{
    console.log(iD)
    projFirestore.collection('chores').doc(iD).update({
        history: firebase.firestore.FieldValue.arrayUnion(createdAt),
        lastCompleted: createdAt,
        
    })
   // only need to pass in objects that youre updating
}


if(data)
    return(
        <div className="mainBckgrnd ">
        
<Menu/>

          <div className="rightSide topView">
<p className="intro">Welcome! I created this project as a way to help keep me organized and remind me of tasks or chores 
    that need to get done. Also as a way to help encourage me to actually complete these tasks. Listed on this home
    page are the tasks that need to be done and are awaiting to be marked complete.</p>

            <h2 className="mainTitle ">Tasks that are due</h2>
  {/* .filter(m=>(timeNowString/1000)-(m.lastCompleted.toMillis()/1000)>m.timePeriod) */}
  {data.filter(m=>((timeNowString/1000)-(m.lastCompleted.toMillis()/1000)).toFixed()>(m.timePeriod)).map(d=>{
       return (
           <div className="mainChore" key={d.id}>


             <Card sx={{ minWidth: 275 }}>
      <CardContent>
          <Button onClick={()=>{completeTask(d.id)}}> Mark complete</Button>
      <Typography variant="h5" >
    
       {d.name}
        </Typography>
     
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={()=>{nav(`/choredetails/${d.id}`)}}>View More</Button>
      </CardActions>
    </Card>

           </div>

       )
   })} 
</div>

        </div>
    )
    else return(
        <div>
            <h4>Loading...</h4>
        </div>
    )
}
export default Main