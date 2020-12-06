import {Link} from "react-router-dom";

import './Header.css';
export const Header=()=>
(<div className="main-header">
<Link to="/" className="item">Incrementer</Link>
<Link to="/gitHubCard" className="item">GitHub Cards</Link>
<Link to="/conditional" className="item">Conditional style</Link>
<Link to="/starmatch" className="item">Start Match Game</Link>
</div>)