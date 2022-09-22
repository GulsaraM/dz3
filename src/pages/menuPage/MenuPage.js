import React from 'react';
import Menu from "../../components/Menu/Menu";


class MenuPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {menu: false}
    }

    handleMenu = () => {
        this.setState({menu: !this.state.menu})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleMenu}>menu</button>

                {/*{*/}
                {/*    this.state.menu === true*/}
                {/*        ?*/}
                {/*        <Menu/>*/}
                {/*        :*/}
                {/*        ""*/}
                {/*}*/}

                {this.state.menu && <Menu/>}

            </div>
        );
    }
}

export default MenuPage;