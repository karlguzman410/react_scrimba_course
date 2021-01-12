import React from 'react'

function DefaultProps(props) {

    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width,
        border: "1px solid"
    }

    return (
        <div>
            <div style={styles}></div>
        </div>
    )
}

DefaultProps.defaultProps = {
    cardColor: "white",
    height: 100,
    width: 100
}

export default DefaultProps
