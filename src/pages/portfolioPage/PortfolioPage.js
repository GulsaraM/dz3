import React from 'react';

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {works: []}
    }

    changeState = () => {
        this.setState(
            {
                works: ["Work1", "Work2"]
            }
        )
    }

    render() {
        return (
            <div>
                {/*<h1>Portfolio page - {this.state.title}</h1>*/}
                {/*<button onClick={this.changeText}>change text</button>*/}

                <button onClick={this.changeState}>get </button>
                <ul>
                    <li>Work1</li>
                    <li>Work2</li>
                </ul>
            </div>
        );
    }
}

export default PortfolioPage;