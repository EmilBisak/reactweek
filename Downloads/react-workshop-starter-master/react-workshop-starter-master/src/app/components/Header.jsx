import React from 'react'
import { Link } from 'react-router-dom'
import { withAppContext } from '../state/AppContext'

const Header = ({ title = '', global }) => (
    <header>
        <nav className={`${global.theme} darken-2`}>
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo card-title">
                        {title}
                    </Link>
                    <div className="right">
                        <a className="waves-effect waves-light btn" onClick={global.changeTheme}>Change Theme</a>
                        <ul className="right">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)

export default withAppContext(Header)
