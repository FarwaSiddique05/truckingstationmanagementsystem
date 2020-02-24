import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../component/auth/login'
import ErrorPage from '../component/Error'
import Dashboard from '../component/mainscreen/dashboard'
import UserForm from '../component/mainscreen/users'
export default class index extends Component {
    render() {
        return (
            <div>
                <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/adduser" component={UserForm} />

                    <Route exact path="*" component={ErrorPage} />
                </Switch>
                </Router>
            </div>
        )
    }
}
