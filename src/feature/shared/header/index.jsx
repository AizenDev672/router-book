import { Link, NavLink } from "react-router-dom";

export function Header(){
    return(
        <header>
            <h1>Book Store</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => { return isActive ? 'is-active': undefined }}>Home</NavLink></li>
                    <li><Link to="/search-page" className="link">Search page</Link></li>
                </ul>
            </nav>
        </header>
    );
}