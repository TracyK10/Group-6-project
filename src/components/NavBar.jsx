
import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar(){
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/politics">Politics</Link>
          </li>
          <li>
            <Link to="/finance">Business</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/othernews">Other News</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;

