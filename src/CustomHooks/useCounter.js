import { useState } from 'react'

function useCounter() {

    //initialize state
    const [count, setCount] = useState(0)
    //create function to modify state
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    //return what another component to have access to (count, increment)
    return { count, increment }
}

export default useCounter