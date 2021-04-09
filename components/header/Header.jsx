import React from 'react';
import './Header.css';


class Header extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: window.cs142models.exampleModel().name
        }
    }

    render() {
        return (
            <div id="header-container">
                <img className='header-my-logo' src='./components/header/logo.jpg'/>
                <div className='header-phrase' >Hi {this.state.name}!</div>
            </div>
        )
    }
}
export default Header;