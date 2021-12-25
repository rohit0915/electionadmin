import React, { useState } from 'react';

//material ui appbar
import { AppBar, Toolbar } from "@material-ui/core";
import electionlogo from "../../Components/images/electionlogo.png"

//css file
import "./Header.css";
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();
    console.log("header props", props)

    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }
    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">

                    <div className="d-flex">
                        <span className="toggle_button_sidebar mt-2">
                            <i class="fa fa-bars mr-2"
                                onClick={() => {
                                    props.setLoading();
                                }}>
                            </i></span>
                        <span><img src={electionlogo} alt="" height="50" /></span>
                    </div>
                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="" >
                            <div class="dropdown ">
                                <div data-toggle="dropdown"><img src={electionlogo} alt="" height="40" className='hover_cursor' />
                                </div>
                                <div class="dropdown-menu animate slideIn dopdown_formatting">
                                    <div className="dropdownLinks p-2" onClick={() => navigate("/change-password")}>
                                        <span><i className="fa fa-cog mr-3" />Change Password</span>
                                    </div>
                                    <hr />
                                    <div className="dropdownLinks p-2 mt-1" onClick={() => navigate("/")}>
                                        <span><i className="fa fa-sign-out mr-3" />LogOut</span>
                                    </div>

                                </div>
                            </div>
                        </span>

                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i class="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    class="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            <div className="text-center">
                                <img src={electionlogo} alt="" />
                            </div>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/dashboard")}>
                                Dashboard
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/admin-user-list")}>
                                Admin User
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/user-list")}>
                                User Manage
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/leader-list")}>
                                Leader Manage
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/template-list")}>
                                Manage Created Template
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/group-list")}>
                                Group List
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/video-list")}>
                                Video List
                            </span>


                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/change-password")}>
                                Change Password
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/")}>
                                Log Out
                            </span>

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
