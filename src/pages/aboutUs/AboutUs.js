import React, {Component} from 'react';
import Menu from "../../components/Menu/Menu";

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {about: false}
    }

    handleAbout = () => {
        this.setState({about: !this.state.about})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAbout}>кнопку</button>
                {this.state.about && <p>текст</p>}
            </div>
        );
    }
}

export default AboutUs;