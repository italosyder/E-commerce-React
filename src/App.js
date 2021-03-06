import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import HomePage from './components/pages/homepage/homepage.component'

class App extends Component {
  constructor(){
    super();
  }


  render(){
    return(
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
      
    )
    
  }
  
}

export default App;
