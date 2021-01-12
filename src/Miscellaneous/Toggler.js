import React, { Component } from 'react'

class Toggler extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isShown: true
        }
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                isShown: !prevState.isShown
            }
        })
    }


    render() {
        return (
            <div>
                {this.props.render(this.state.isShown, this.toggle)}
            </div>
        )
    }
}

export default Toggler
