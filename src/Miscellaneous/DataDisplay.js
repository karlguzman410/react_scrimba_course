import React from 'react'
import DataFetcher from './DataFetcher'

function DataDisplay(props) {

    return (
        <DataFetcher
            render={(isLoading, data, errorStatus) => (
                <div>
                    {isLoading ? <p>Loading...</p> : JSON.stringify(data)}
                    {errorStatus === 1 ? <h1>Something went wrong</h1> : ""}
                </div>
            )}
            url={"https://swapi.dev/api/people/1/"}
        />
    )
}

export default DataDisplay
