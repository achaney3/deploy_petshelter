import './css/App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PetList from './components/PetList';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import ShowPet from './components/ShowPet';
import DarkModeToggle from "react-dark-mode-toggle";


function App() {
  const [darkMode, setDarkMode] = useState(false);
// checking local storage on if in dark mode
  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if(currentMode){
      setDarkMode(true);
      console.log("ahh its so bright!")

    }else{
      setDarkMode(false);
      console.log("we're not in darkmode")
    };
  }, []);
// adding darkmode class to the site when clicking button
  useEffect(() => {
    if(darkMode){
      document.body.classList.add("dark");
      console.log("setting to darkmode")
      
    }else{
      document.body.classList.remove("dark");
      console.log("no dark mode here")
    }
    const json= JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json)
  }, [darkMode]);
  return (
    <div id="" className="App container">
      <BrowserRouter>
        <h1>Pet Shelter</h1>
        <DarkModeToggle className="float-start"
      onChange={()=> setDarkMode(!darkMode)}
    checked={darkMode}/>
        <Switch>
          {/* Home */}
          <Route exact path='/'>
            <Link to="/pets/new" className="float-end">Add a Pet to the Shelter</Link>
            <PetList />
          </Route>
 {/* Create New Pet */}
 <Route exact path='/pets/new'>
            <Link to="/" className="float-end">Back Home</Link>
            <br/>
            <NewPet />
          </Route>

          {/* Show Pet Details */}
          <Route exact path='/pets/:id'>
            <Link to="/" className="float-end">Back Home</Link>
            <ShowPet />
          </Route>
         
          {/*Edit an Pet */}
          <Route exact path='/pets/:id/edit'>
            <Link to="/" className="float-end"> Back Home</Link>
            <br />
            <EditPet />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
