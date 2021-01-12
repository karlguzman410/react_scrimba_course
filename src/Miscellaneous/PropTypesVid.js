import React from 'react'
import PropTypes from 'prop-types'


function PropTypesVid(props) {

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

PropTypesVid.propTypes = {
    cardColor: PropTypes.oneOf(['blue', 'red']).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

export default PropTypesVid
