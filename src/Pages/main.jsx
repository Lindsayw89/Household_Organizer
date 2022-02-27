import React, {useState, useEffect} from 'react'
import { projFirestore } from '../firebase/config'
import {Link, useNavigate } from 'react-router-dom'
import '../cssFolder/main.css'
import Menu from '../Components/side/menu'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';




const Main=()=>{
let nav=useNavigate()
    const options = { year: '2-digit', month: '2-digit', day: '2-digit' };

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


if(data)
    return(
        <div className="mainBckgrnd ">
        
<Menu/>

          <div className="rightSide topView">


            <h2 className="mainTitle ">Tasks that are due</h2>
  {/* .filter(m=>(timeNowString/1000)-(m.lastCompleted.toMillis()/1000)>m.timePeriod) */}
  {data.filter(m=>((timeNowString/1000)-(m.lastCompleted.toMillis()/1000)).toFixed()>(m.timePeriod)).map(d=>{
       return (
           <div className="mainChore" key={d.id}>


             <Card sx={{ minWidth: 275 }}>
      <CardContent>
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