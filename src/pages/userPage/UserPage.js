import React from 'react';
import classes from "./userPage.module.css";

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul className={classes.title}>
                    <li>name: {this.props.userOne.name}</li>
                    <li>age: {this.props.userOne.age}</li>
                </ul>
                {/*<h1 className={classes.title}>User Page</h1>*/}
                {/*<p className={classes.paraph}>Lorem ipsum dolor sit amet.</p>*/}
            </div>
        );
    }
}
export default UserPage;