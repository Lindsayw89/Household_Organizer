import React, {useState, useEffect} from 'react'
import Menu from '../Components/side/menu';
import '../cssFolder/about.css';
const About=()=>{ 




    return (
    <div className="aboutPage">
        <Menu/>
<h4 className="topView">About my Project</h4>

<p>I created this project as a way to help oragnize myself. In this project I am using react and javascript.
     Data is being pulled from google firebase and I am using material ui for styling </p>
    </div>
    )
}
export default About