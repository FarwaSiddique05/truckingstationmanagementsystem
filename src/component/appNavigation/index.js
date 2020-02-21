import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import header from '../header'
// import Login from '../auth/login'
export default class index extends Component {
    render() {
        return (
            <div>
             <Router >
                 <Route exact path = "/" component = {header} />
                 </Router>   

            </div>
        )
    }
}
