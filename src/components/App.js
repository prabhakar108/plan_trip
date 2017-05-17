import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import LoginRegister from "./LoginRegister";
import SideMenu from "./SideMenu"
import Registerbox from "./Registerbox";
import Planbox from "./Planbox";
const App = () => (
    <div className="container-fluid">
        <div className="col-md-12" >
            <Registerbox />
        </div>
        <div className="col-md-12" >
            <LoginRegister />
        </div>
        <div className="col-md-12" >
            <div className="col-md-3" >
                <SideMenu />
            </div>
            <div className="col-md-9" >
                <Planbox />
            </div>
        </div>

    </div>
)
export default App;