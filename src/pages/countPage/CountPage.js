import React from 'react';

class CountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    minus = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        );
    }
}

export default CountPage;