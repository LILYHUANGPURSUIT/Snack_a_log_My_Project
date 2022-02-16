import {Link} from "react-router-dom";

const NavBar = () =>{

    return (
        <nav className="nav">
            <Link to="/"><img className="narBar_logo" src="https://c.tenor.com/WMSdo8L2zVIAAAAj/dessert-craving.gif" alt="nav_bar_logo" /></Link>
            <Link to="/snacks"><h2>All Snacks</h2></Link>
            <button><Link to="/snacks/new">New Snack</Link></button>
        </nav>
    )
}

export default NavBar;