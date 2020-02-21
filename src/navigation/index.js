import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from '../component/auth/login'
export default class index extends Component {
    render() {
        return (
            <div>
              <Router>
                  <Route exact path = "/" component= {Login} / >
                  </Router>  
            </div>
        )
    }
}
