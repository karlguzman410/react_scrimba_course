import React, { useState, useEffect } from 'react'
import randomcolor from 'randomcolor'

function UseEffect1() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('')
    const [round, setRound] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        //cleanup function
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    useEffect(() => {
        console.log('check count function ran')
        if (count > 20) {
            setCount(count => 0)
            setRound(prevRound => prevRound + 1)
        }
    }, [count])

    return (
        <div>
            <h2 style={{ color: color }}>Count: {count}</h2>
            <h5>Round number : {round}</h5>
        </div>
    )
}

export default UseEffect1
