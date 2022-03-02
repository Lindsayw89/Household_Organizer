import logo from './logo.svg';
import './App.css';
import Main from './Pages/main';
import {BrowserRouter, Route,Routes, Switch, Link, NavLink} from 'react-router-dom'
import ChoreDetails from './Pages/choreDetails';
import AllChores from './Pages/allChores';
import Menu from './Components/side/menu'
import NewChore from './Pages/NewChore';
import About from './Pages/About';

function App() {

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then((res)=>res.json())
  // .then((data)=>console.log(data)).then((data)=>console.log("yess"))
  // .then(()=>console.log('three')).then(()=>console.log('four'))


  return (
    <div className="App">
      <BrowserRouter>




<Routes>
<Route exact path='/' element={<Main/>}/>
<Route path='/choredetails/:id'element={<ChoreDetails/>}/>
<Route path='/all' element={<AllChores/>}/>
<Route path='/new' element={<NewChore/>}/>
<Route path='/about' element={<About/>}/>
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
