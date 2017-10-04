import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router'
import About from './modules/About'
import MyGermany from './modules/MyGermany'
import SearchPartner from './modules/SearchPartner'
import MyProfile from './modules/MyProfile'
import Header from './modules/Header'

render((
  <div>
    <Header/>
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/about" component={About}/>
    <Route path="/myprofile" component={MyProfile}/>    
    <Route path="/mygermany" component={MyGermany}/>
    <Route path="/searchpartner" component={SearchPartner}/>
  </Router>
    </div>
), document.getElementById('app'))