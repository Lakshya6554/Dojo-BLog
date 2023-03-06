import { a, Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            
            <h1>The Pen Pushers</h1>
            <div className="as">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius:'8px'
                }}>New blog</Link>
                <Link to="/">Contact us</Link>
                <Link to="/">about</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;