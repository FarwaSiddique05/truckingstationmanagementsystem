import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <div>
                <header>
                    <Link to = '/'>home
                    </Link>
                </header>
            </div>
        )
    }
}