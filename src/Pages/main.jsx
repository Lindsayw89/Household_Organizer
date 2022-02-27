import React, {useState, useEffect} from 'react'
import { projFirestore } from '../firebase/config'
import {Link, } from 'react-router-dom'
import '../cssFolder/main.css'
import Menu from '../Components/side/menu'

const Main=()=>{

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
        <div className="mainBckgrnd topView ">
<Menu/>

          <div className="rightSide">


            <h2 className="mainTitle ">Tasks that are due</h2>
  {/* .filter(m=>(timeNowString/1000)-(m.lastCompleted.toMillis()/1000)>m.timePeriod) */}
  {data.filter(m=>(timeNowString/1000)-(m.lastCompleted.toMillis()/1000)>(m.timePeriod/1000)).map(d=>{
       return (
           <div className="mainChore" key={d.id}>
         
               <p>{d.name}</p>
               {/* <li>{d.lastCompleted.toMisllis()}</li> */}
               {/* <li>{((timeNowString/1000)-(d.lastCompleted.toMillis()/1000)).toFixed(0)} math</li>

               <li>{d.lastCompleted.toMillis()/1000} fb miilli</li>
               <li>{(timeNowString)} timenow</li> */}
             <Link to={`/choredetails/${d.id}`}>Details</Link>
             
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