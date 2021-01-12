import React from 'react'
import UserContext from './userContext'


function UserContextConsumer(props) {
    return (
        <UserContext.Consumer>
            {user => (
                <p>Username : {user}</p>
            )}
        </UserContext.Consumer>
    )
}

export default UserContextConsumer
