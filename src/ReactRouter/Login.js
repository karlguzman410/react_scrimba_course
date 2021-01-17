import React, { useState } from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Profile from './Profile/Profile'



function Login() {

    const [userName, setUserName] = useState('')
    const [passWord, setpassWord] = useState('')
    const [status, setStatus] = useState(false)

    function handleUserNameChange(event) {
        setUserName(event.target.value)
    }

    function handlePassword(event) {
        setpassWord(event.target.value)
    }

    function verifyLogin() {
        setTimeout(() => {
            if (userName === "karlg" && passWord === "41093") {
                setStatus(true)
            } else {
                alert('Password incorrect!')
            }
        }, 1500)

    }


    const loginStatus = (status ? <h4>Online</h4> : <h4>Offline</h4>)
    const loggedIn = (!status ? <p>Please log in</p> : <Redirect to="/profile" />)
    console.log(status)
    return (
        <div>
            <h1>Login</h1>
            <input type="text" name="userName" value={userName} placeholder="Username" onChange={handleUserNameChange} required />
            <input type="password" name="passWord" value={passWord} placeholder="Password" onChange={handlePassword} required />
            <button onClick={verifyLogin}>Submit</button>

            {loginStatus}
            {loggedIn}

        </div>
    )
}

export default Login
