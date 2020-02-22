import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from '../component/auth/login'
import main from '../component/mainscreen'
export default class index extends Component {
    render() {
        return (
            <div>
                
              <Router>
                  <Route exact path = "/" component= {Login} / >
                      <Route exact path = "/main" component={main} / >
                   </Router>  
            </div>
        )
    }
}
