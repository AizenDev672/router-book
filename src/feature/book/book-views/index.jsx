import { Link, useParams, Outlet } from "react-router-dom";

export function BookViews(){
    const { name } = useParams();
    return(
        <div>
            <h1>Book</h1>
            { name }
            <Link to='details'>Ir a los detalles</Link>
            <Outlet />
        </div>
    );
}