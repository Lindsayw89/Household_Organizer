import react, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import { projFirestore } from '../firebase/config'
import { format } from 'date-fns/fp'
import Menu from './side/menu'


const ChoreDetails =()=>{
    const[chore, setChore]=useState()
    const[isPending, setIsPending]=useState(false)
    const[error, setError]=useState(false)
    const {id}=useParams()

    useEffect(()=>{
        setIsPending(true)

        projFirestore.collection('chores').doc(id).get().then((doc)=>{
           if(doc.exists){
setIsPending(false)
setChore(doc.data())
console.log(doc.data())
           }
           else{
               setIsPending(false)
               setError('could not find details')
           }
        })
    },[id])

if(chore)
    return(
        <div>
            <Menu/>
            <Link to='/'>Back to Home</Link>
<p> chore details page</p>
<p>{chore.name}</p>
<p>Last Completed:
    {chore.lastCompleted.toDate().toDateString()}
{/* { format(chore.lastCompleted, 'MM/dd/yyyy')} */}
</p>
        </div>
    ); else return(
<div>
    <h4> Loading...</h4>
</div>
    )

}


export default ChoreDetails  