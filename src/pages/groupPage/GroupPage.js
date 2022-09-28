import React, {Component} from 'react';

class GroupPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            arr: []
        }
    }

    // componentDidMount() {
    //     this.setState({count: 1})
    // }

    componentDidUpdate(prevState) {
        if(prevState.count !== this.state.count)
            console.log(this.state.count)
        }


    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div className="groupPage">
                <h1>Group page - {this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                {this.state.arr.map(num => <div>{num + 2}</div>)}
            </div>
        );
    }
}

export default GroupPage;