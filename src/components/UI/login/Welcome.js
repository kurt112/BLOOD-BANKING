import React, {Suspense} from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
import Login from './Login'
import PageNotFound from '../pageNotFound/page-not-found'
const Welcome = () => {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/page-not-found' exact component={PageNotFound}></Route>
                <Redirect to='/page-not-found' />
            </Switch>
        </Suspense>
    )
}

export default Welcome