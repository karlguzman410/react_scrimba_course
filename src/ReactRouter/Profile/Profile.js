import React from 'react'
import { Link, Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import Info from './Info'
import Settings from './Settings'


function Profile() {

    const { path, url } = useRouteMatch()

    const history = useHistory()
    console.log(history)

    function loginHandler() {
        console.log("Going back to home")
        setTimeout(() => {
            history.push("/")
        }, 1500)
    }

    return (
        <div>
            <h1>This is your profile</h1>
            <ul>
                <li><Link to={`${url}/info`}>Profile info</Link></li>
                <li><Link to={`${url}/settings`}>Settings</Link></li>
            </ul>

            <button onClick={loginHandler}>Back to home</button>




            <Switch>
                <Route path={`${path}/info`}>
                    <Info />
                </Route>
                <Route path={`${path}/settings`}>
                    <Settings />
                </Route>
            </Switch>
        </div>
    )
}

export default Profile
