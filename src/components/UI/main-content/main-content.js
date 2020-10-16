import React, { Suspense, lazy } from 'react'
import './main-content.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import Loading from '../loading/loading'

const DonateBlood = lazy(() => import('./donate-blood/BloodDonor'))
const ReceiveBlood = lazy(() => import('./receive-blood/BloodReceiver'))
const PageNotFound = lazy(() => import('../pageNotFound/page-not-found'))
const Profile = lazy(() => import('./profile/profile'))

const MainContent = (props) => {
    return (
        <div className='main-content'>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path='/' exact component={ReceiveBlood}></Route>
                    <Route path='/profile' exact render={()=><Profile/>}></Route>
                    <Route path='/donate' exact component={DonateBlood}></Route>
                    <Route path='/page-not-found' exact component={PageNotFound} />
                    <Redirect to='/page-not-found' />
                </Switch>
            </Suspense>
        </div>
    )
}





export default MainContent