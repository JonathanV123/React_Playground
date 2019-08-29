import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class dog extends Component {
    static propTypes = {
        testPro: PropTypes.string
    }

    render() {
        console.log(this.props);
        return (
            <div>
                🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶
            </div>
        )
    }
}
