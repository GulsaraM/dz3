import React from "react";

class AboutPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>Class component - {this.props.title}</h1>
                <ul>
                    <li>
                        {this.props.description.name}
                    </li>
                    <li>
                        {this.props.description.body}
                    </li>
                </ul>
            </>
        )
    }
}

export default AboutPage;