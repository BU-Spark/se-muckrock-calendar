import './SideDrawer.css';
import {Link} from 'react-router-dom';
import logo from  '../../images/logo-192x192.png';


/** Component for the navbar on the side of the site (replaces NavBar component) **/
const SideDrawer = ({show, click, setCurrentPageRequests, setCurrentPageProjects}) => {
    const sideDrawerClass = ["sidedrawer"];

    if (show) {
        sideDrawerClass.push("show");
    }


    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={click}>
            <div className="sidedrawer__menu">
                <div className="sidedrawer__logoholder">
                    <img src={logo} alt="logo" className="sidedrawer__muckrocklogo"/>
                </div>

                <h2>MuckRock</h2>
                <div className="sidedrawer__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <Link to="/Dashboard">Dashboard</Link>
                </div>
                <div className="sidedrawer__link">
                    <i className="fa fa-user-secret" aria-hidden="true"></i>
                    <Link to="/Projects" onClick={setCurrentPageProjects}>Projects</Link>
                    {/* <a href="/Projects">Projects</a> */}
                </div>
                <div className="sidedrawer__link">
                    <i className="fa fa-quote-right"></i>
                    <Link to="/Requests" onClick={setCurrentPageRequests}>Requests</Link>
                    {/* <a href="/Requests">Requests</a> */}
                </div>
                <div className="sidedrawer__link">
                    <i className="fa fa-calendar"></i>
                    <Link to="/dev">Calendar</Link>
                    {/* <a href="/Calendar">Calendar</a> */}
                </div>
                <div className="sidedrawer__link">
                    <i className="fa fa-bell"></i>
                    <Link to="/dev">Month View</Link>
                    {/* <a href="/monthview">monthview</a> */}
                </div>
                <div className="sidedrawer__link">
                    <i className="fa fa-cog"></i>
                    <Link to="/dev">Settings</Link>
                    {/* <a href="/Settings">Settings</a> */}
                </div>
            </div>
        </ul>

    </div>;
};

export default SideDrawer;