import React, { Component } from 'react';
import AppContext from './AppContext';

class AppState extends Component {
    constructor(props) {
        super(props)
        const savedTheme = localStorage.getItem("theme")
        const theme = !!savedTheme ? savedTheme : "red"
        this.state = {
            theme
        }


    }

    changeTheme = () => {
        this.setState((prevState) => {
            const theme = prevState.theme === "red" ? "blue" : "red";
            localStorage.setItem("theme", theme)
            return {
                theme
            }
        })
    }

    render() {
        const { changeTheme } = this
        const { theme } = this.state
        return (
            <AppContext.Provider value={{ theme, changeTheme }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppState;