import { Link, NavLink } from "react-router-dom";
import { useList  } from "../../hooks/list";
import { IconList } from "../Icons";

export function Header(){
    const { list } = useList();

    return(
        <header>
            <h1>Book Store</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => { return isActive ? 'is-active': undefined }}>Home</NavLink></li>
                    {/* <li><Link to="/search-page" className="link">Search page</Link></li> */}
                    <li>
                        <Link to="/list" className="btn-list">
                            <IconList /> <span> { list.length } </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}