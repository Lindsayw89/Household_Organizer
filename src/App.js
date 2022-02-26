import logo from './logo.svg';
import './App.css';
import Main from './Pages/main';
import {BrowserRouter, Route,Routes, Switch, Link, NavLink} from 'react-router-dom'
import ChoreDetails from './Components/choreDetails';
import AllChores from './Pages/allChores';
import Menu from './Components/side/menu'

function App() {

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then((res)=>res.json())
  // .then((data)=>console.log(data)).then((data)=>console.log("yess"))
  // .then(()=>console.log('three')).then(()=>console.log('four'))


  return (
    <div className="App">
      <BrowserRouter>




<Routes>
<Route exact path='/Household_Organizer' element={<Main/>}/>
<Route path='/choredetails/:id'element={<ChoreDetails/>}/>
<Route path='/all' element={<AllChores/>}/>
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
