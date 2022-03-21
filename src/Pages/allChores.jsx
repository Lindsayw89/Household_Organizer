import React, { useEffect, useState } from 'react'
import { projFirestore } from '../firebase/config'
import Menu from '../Components/side/menu'
import {useNavigate} from 'react-router-dom'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';
import moment from 'moment'

const AllChores =()=>{
    const[data, setData]=useState()
    const[isPending, setIsPending]=useState(false)
    const[error, setError]=useState(false)
    const[timeNowString, setTimeNowString]=useState(new Date().getTime())
let nav=useNavigate()
    const getChores=()=>{
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
       
        }
        
        }).catch(err=>{
            setError(err.messsage)
         
        })

    }
    useEffect(()=>{
getChores()
    },[])


    if(data)
    return(
        <div className="mainBckgrnd ">
        
<Menu/>

          <div className="rightSide topView">


            <h2 className="mainTitle ">All Tasks</h2>
  <div className="allCards">
  {data.map(d=>{
       return (
          
<div className="mainChore"  key={d.id}>
             <Card  >
      <CardContent>
      <Typography variant="h5" >
    
       {d.name}
        </Typography>

        <Typography>
        Complete every: 
    { d.timePeriod<3628800 &&
     ' ' +moment.duration(d.timePeriod*1000).asWeeks().toFixed()+ ' weeks' }
     { d.timePeriod>=3628800 &&
     ' ' + moment.duration(d.timePeriod*1000).asMonths().toFixed()+ ' months' }
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

        </div>
    )
    else return(
        <div>
            <h4>Loading...</h4>
        </div>
    )
}
export default AllChores