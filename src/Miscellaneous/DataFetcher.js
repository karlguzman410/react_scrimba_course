import React, { useState, useEffect } from 'react'

function DataFetcher(props) {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errorStatus, setErrorStatus] = useState(0)
    const url = props.url

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData({ data: data }))
            .catch(error => setErrorStatus({ errorStatus: 1 }))
        setIsLoading(!isLoading)
        console.log(errorStatus)
    }, [url])

    return (
        <div>
            {props.render(isLoading, data)}
        </div>
    )
}

export default DataFetcher
