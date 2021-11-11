import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <h1>Users Manager</h1>
           <div className = "links">
               <Link to="/">Home</Link>
               <Link to="/new-users">New Users</Link>
               <Link>Update Users</Link>
               <Link>Delete Users</Link>  
            </div> 
        </nav>
     );
}

export default Navbar;