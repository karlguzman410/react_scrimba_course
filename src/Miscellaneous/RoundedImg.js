import React from 'react'
import PropTypes from 'prop-types'

function RoundedImg(props) {

    return (
        <div>
            <img
                src={props.src}
                style={{ borderRadius: props.borderRadius, height: 100, width: 100 }}
                alt="myImg" />
        </div>
    )
}

RoundedImg.propTypes = {
    src: PropTypes.string.isRequired,
    borderRadius: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

RoundedImg.defaultProps = {
    borderRadius: "50%"
}

export default RoundedImg
