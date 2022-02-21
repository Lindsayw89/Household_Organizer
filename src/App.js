import logo from './logo.svg';
import './App.css';
import Main from './Components/main';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ChoreDetails from './Components/choreDetails';

function App() {

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then((res)=>res.json())
  // .then((data)=>console.log(data)).then((data)=>console.log("yess"))
  // .then(()=>console.log('three')).then(()=>console.log('four'))


  return (
    <div className="App">
      <BrowserRouter>




<Switch>
<Route exact path='/Household_Organizer'><Main/></Route>
<Route path='/choredetails/:id'><ChoreDetails/></Route>
</Switch>

</BrowserRouter>
    </div>
  );
}

export default App;
