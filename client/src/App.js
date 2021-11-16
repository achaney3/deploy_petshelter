import './App.css';
import React from 'react';
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

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <h1>Pet Shelter</h1>
        <Switch>
          {/* Home */}
          <Route exact path='/'>
            <Link to="/pets/new" className="float-end">Add a Pet to the Shelter</Link>
            <PetList />
          </Route>
 {/* Create New Pet */}
 <Route exact path='/pets/new'>
            <Link to="/" className="float-end">Go back Home</Link>
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
            <Link to="/" className="float-end">Home</Link>
            <br />
            <EditPet />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
