import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom' //imported to route from one page to another
import './App.css';


import Users from './User /pages/Users';
import NewPlace from './places/pages/place';


const App = () =>{

  return(

    <Router> {/* Router started here*/} 
      <Switch> {/* Switch used to chose either of these paths*/}
        <Route path = "/" exact> {/* This only works if the path is EXACTLY "/" */} 
          <Users />
        </Route>

        <Route path = "/Places/new" exact> {/* This only works if the path is EXACTLY "/" */} 
          <NewPlace />
        </Route>
        <Redirect to = "/" />{/* component in the react dom package that automatically redirects to whatever path listed */}
      </Switch> 
    </Router>
  )
}
export default App;
