import React from 'react';

class FormPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            form: {
                name: "",
                // lastName: "",
                age: 0,
                email: "",
                gender: ""
            }
        }
    }

    changeInput = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    registerUser = e => {
        e.preventDefault()

        if(this.state.form.name.trim() ===""){
            alert("имя не задано")
            return
        }else if(this.state.form.age.trim()===""){
            alert("возраст не задан")
            return
        }else if(this.state.form.email.trim()===""){
            alert("email не задан")
            return
        }else if(this.state.form.gender.trim()===""){
            alert("пол не выбран")
            return
        }else {
            console.log(this.state.form);
        }
    }

    clearAllInput = () => {
        this.setState(
            {form: {
                ...this.state.form
            }}
        )
    }

    render() {
        return (
            <>
                <h1>Register user</h1>
                <form onSubmit={this.registerUser}>
                    <input type="text"
                           placeholder="name"
                           onChange={this.changeInput}
                           name="name"
                    />

                    {/*<input type="text"*/}
                    {/*       placeholder="last name"*/}
                    {/*       onChange={this.changeInput}*/}
                    {/*       name="lastName"*/}
                    {/*/>*/}

                    <input type="text"
                           placeholder="age"
                           onChange={this.changeInput}
                           name="age"
                    />
                    <input type="email"
                           placeholder="email"
                           onChange={this.changeInput}
                           name="email"
                    />
                    <select name="gender" onChange={this.changeInput}>
                        <option value="">выберите пол</option>
                        <option  value="Женский">Женский</option>
                        <option  value="Мужской">Мужской</option>
                    </select>
                    <button type="submit">add</button>
                    <button type="reset" onSubmit={this.clearAllInput}>clear all</button>
                </form>
            </>
        );
    }
}

export default FormPage;