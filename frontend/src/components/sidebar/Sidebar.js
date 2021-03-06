import "./Sidebar.css";
import React from "react";
import Sidebar from "react-sidebar";
import {Link} from "react-router-dom";

// import logo from "../../assets/logo.png";

class SidebarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  

  render() {
    return (
      <Sidebar
        sidebar={
          <div className="sidebar__menu">
            <button onClick={() => this.onSetSidebarOpen(false)}> <i class = "fa fa-bars"></i></button>
            <div className="sidebar__link active_menu_link">
              <i className="fa fa-home"></i>
              <a href = "/Dashboard">Dashboard</a>
            </div>
            <h2>MuckRock</h2>
            <div className="sidebar__link">
              <i className="fa fa-user-secret" aria-hidden="true"></i>
              <a href="/Projects">List of Projects</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-quote-right"></i>
              <a href="/Requests">Requests</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-calendar"></i>
              <a href="/Calendar">Calendar</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-bell"></i>
              <a href="/monthview">monthview</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-cog"></i>
              <a href="/Settings">Settings</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-quote-right"></i>
              {/* All the others really should be like this! */}
              <Link to="/requests">Requests</Link>
            </div>
           
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          <i class = "fa fa-bars"></i>
        </button>
      </Sidebar>
      

      





    );
  }
};

export default SidebarComp;