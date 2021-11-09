import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/NavBar/Navbar";
//import Sidebar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Project from "./components/ProjectCard/Project";
//import Request from "./components/Request/Request";
import RequestsPage from "./pages/RequestsPage/RequestsPage";
//import DayView from "./components/DayView/DayView";
import MonthView from './components/MonthView/MonthView';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [sideToggle, setSideToggle] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (

    <div>
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/home" exact component={HomePage} />
          <Route path="/requests"><RequestsPage/></Route>
          <Route path="/projects"><ProjectsPage/></Route>
          <Route path="/calendar"><CalendarPage/></Route>
          <Route path="/monthview"><MonthView/></Route>

        </Switch>
      </Router>
    </div>
    // <Projects />
    // <Login />
    // <DayView/>
    // <Calendar/>
  );
};

export default App;
