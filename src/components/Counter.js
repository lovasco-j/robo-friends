import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    onClick = () => {
        this.setState((state) => ({
            count: state.count += 1
        }))
    }

    render() {
        return (
            <button onClick={this.onClick}>
                {this.state.count}
            </button>
        )
    }
}

export default Counter;
