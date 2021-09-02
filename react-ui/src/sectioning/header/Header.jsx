import './header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <div className="header-container">
            <header>
                <div className="header-contents">
                    <div className="nav-left">
                        <div className="home navs">
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </div>
                        <div className="about navs">
                            <NavLink to="/profile">
                                Profile
                            </NavLink>
                        </div>
                    </div>
                    <div className="nav-right">
                            <div className="login navs">
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;