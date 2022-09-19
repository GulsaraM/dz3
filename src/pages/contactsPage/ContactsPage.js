import React from 'react';

function ContactsPage(props) {

    const sayHello = () => {
        alert("hello world")
    }

    // const openInfo = () => {
    //     console.log("Sara Mamyrova")
    // }
    //
    // const changeName = event => {
    //     console.log(event.target.value)
    // }
    //
    // const onBlur = event => {
    //     console.log(event.target.value)
    // }
    //
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //   console.log("Hello submit")
    // }

    return (
        <div>
            {/*<input onChange={changeName} type="text" placeholder="name"/>*/}
            {/*<input type="text" onBlur={onBlur} placeholder="last name"/>*/}
            <button onClick={sayHello}>Add user</button>
            {/*<button onDoubleClick={openInfo}>open info</button>*/}

            {/*<form onSubmit={onSubmit}>*/}
            {/*    <input type="number" placeholder="age"/>*/}
            {/*    <button type="submit">Add</button>*/}
            {/*</form>*/}
        </div>
    );
}

export default ContactsPage;