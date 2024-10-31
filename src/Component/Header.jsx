import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>Navber</h2>
            <nav className="bg-green-700">
               <Link className="" to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/contact'>Contact</Link>
               <Link to='/users'>Users</Link>
               <Link to='/posts'>Posts</Link>

                
            </nav>
        </div>
    );
};

export default Header;