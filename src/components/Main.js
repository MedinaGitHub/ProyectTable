import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import FormTable from './FormTable'
import ListContainer from '../containers/ListContainer'
import FormContainer from '../containers/FormContainer'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact  path='/' component={ListContainer}/>
      <Route path='/ListContainer' component={ListContainer}/>
      <Route path='/FormContainer' component={FormContainer}/>
      <Route path='/Dashboard' component={Dashboard}/>
    </Switch>
  </main>
)

export default Main
