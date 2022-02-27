import React, { useEffect, useState } from 'react'
import { projFirestore } from '../firebase/config'
import Menu from '../Components/side/menu'


const AllChores =()=>{
    const[data, setData]=useState()
    const[isPending, setIsPending]=useState(false)
    const[error, setError]=useState(false)

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

    },[])

    return(
        <div> 
            <Menu/>
    <h4 className="topView">All</h4>

    
    </div>
    )
}
export default AllChores