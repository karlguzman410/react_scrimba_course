import React, { useState } from 'react'

function UseState3() {

    const [inputData, setinputData] = useState({
        firstName: '',
        lastName: ''
    })

    const [contactData, setContactData] = useState([])

    function handleChange(event) {
        const { name, value } = event.target
        setinputData(prevInputData => {
            return {
                ...prevInputData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setContactData(prevContactData => [...prevContactData, inputData])
    }

    console.log(contactData)

    const contacts = contactData.map(contact => <h2 key={contact.firstName + contact.lastName}> {contact.firstName} {contact.lastName}</h2>)

    console.log(`Contacts: ${contacts}`)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Enter first name here'
                    name='firstName'
                    value={inputData.firstName}
                    onChange={handleChange} />

                <input
                    placeholder='Enter last name here'
                    name='lastName'
                    value={inputData.lastName}
                    onChange={handleChange} />

                <button>Add Contact</button>
            </form>
            <div>
                <h1>Contacts:</h1>
                {contacts}
            </div>
        </div>

    )
}

export default UseState3
