// import React from 'react';
//
// function ContactsPage(props) {
//
//     const sayHello = () => {
//         alert("hello world")
//     }
//
//     // const openInfo = () => {
//     //     console.log("Sara Mamyrova")
//     // }
//     //
//     // const changeName = event => {
//     //     console.log(event.target.value)
//     // }
//     //
//     // const onBlur = event => {
//     //     console.log(event.target.value)
//     // }
//     //
//     // const onSubmit = (e) => {
//     //     e.preventDefault();
//     //   console.log("Hello submit")
//     // }
//
//     return (
//         <div>
//             {/*<input onChange={changeName} type="text" placeholder="name"/>*/}
//             {/*<input type="text" onBlur={onBlur} placeholder="last name"/>*/}
//             {/*<button onClick={sayHello}>Add user</button>*/}
//             {/*<button onDoubleClick={openInfo}>open info</button>*/}
//
//             {/*<form onSubmit={onSubmit}>*/}
//             {/*    <input type="number" placeholder="age"/>*/}
//             {/*    <button type="submit">Add</button>*/}
//             {/*</form>*/}
//         </div>
//     );
// }
//
// export default ContactsPage;

import React, {Component} from 'react';

class ContactsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {input: ""}
    }

    changeInput = e => {
        this.setState({input: e.target.value})
    }

    addUser = () => {
        console.log(this.state)
        document.getElementById("textInput").value = "";
    }

    clearUser = () => {
        document.getElementById("textInput").value = "";
    }

    render() {
        return (
            <>
                <input id="textInput" type="text" onChange={this.changeInput}/>
                <button onClick={this.addUser}>add</button>
                <button onClick={this.clearUser}>clear</button>
            </>
        );
    }
}

export default ContactsPage;