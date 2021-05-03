import { Button } from 'react-bootstrap';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="Navbar">
                <h1>ueno.</h1>
                <div class="topnav">
                <a class="active" href="#home">Services</a>
                <a href="#news">Clients</a>
                 <a href="#contact">Career</a>
                 <a href="#contact">About</a>
                 <Button className="btn1">Contacts</Button>

</div>
        </div>
    );
};
export default Navbar;