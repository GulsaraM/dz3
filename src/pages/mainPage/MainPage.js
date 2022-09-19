import React from 'react';
import classes from "./mainPage.module.css";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="mainPage">
                <ul className={classes.title}>
                    <li>name: {this.props.userOne.name}</li>
                    <li>age: {this.props.userOne.age}</li>
                </ul>
                {/*<h1 className={`${classes.title} uppercase`}>Main Page</h1>*/}
                {/*<p className={classes.paraph}>Lorem ipsum dolor sit amet.</p>*/}
            </div>
        );
    }
}
export default MainPage;