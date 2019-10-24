import React, { useContext } from 'react'
import AppContext from '../state/AppContext';

const Footer = () => {
    const { theme } = useContext(AppContext);

    return (
        <footer className={`page-footer ${theme} darken-2`}>
            <div className="footer-copyright">
                <div className="container">© {new Date().getFullYear()} Copyright Emil Bisak</div>
            </div>
        </footer>
    )
}

export default Footer
