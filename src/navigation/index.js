import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../component/auth/login'
import ErrorPage from '../component/Error'
import Dashboard from '../component/mainscreen/dashboard'
import UserForm from '../component/mainscreen/users'
import ViewForm from '../component/mainscreen/viewUser'
import AddParty from '../component/mainscreen/addParty'
import ViewParty from '../component/mainscreen/viewParty'
export default class index extends Component {
    render() {
        return (
            <div>
                <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/adduser" component={UserForm} />
                    <Route exact path="/viewuser" component={ViewForm} />
                    <Route exact path="/addparty" component={AddParty} />
                    <Route exact path="/viewparty" component={ViewParty} />
                    <Route exact path="*" component={ErrorPage} />
                </Switch>
                </Router>
            </div>
        )
    }
}
