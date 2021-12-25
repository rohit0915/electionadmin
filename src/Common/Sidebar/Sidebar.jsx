import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
    faFile,
    faLaptopHouse,
    faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const navigate = useNavigate();
    return (
        <>

            <div className="sidebar_in_mobile_view">
                <ProSidebar collapsed={props.isloading}>
                    <Menu iconShape="circle">
                        <MenuItem icon={<FontAwesomeIcon icon={faLaptopHouse} />} onClick={() => navigate("/dashboard")}>
                            Dashboard
                        </MenuItem>

                        <MenuItem icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/admin-user-list")}>
                            Admin User
                        </MenuItem>

                        <MenuItem icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/user-list")}>
                            User Manage
                        </MenuItem>

                        <MenuItem icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/leader-list")}>
                            Leader Manage
                        </MenuItem>

                        <MenuItem icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/template-list")}>
                            Manage Created Template
                        </MenuItem>

                        <SubMenu title="Group Manage" icon={<FontAwesomeIcon icon={faPeopleArrows} />}>
                            <MenuItem onClick={() => navigate("/group-list")}>Group List</MenuItem>
                            {/* <MenuItem onClick={() => navigate("/video-list")}>Video List</MenuItem> */}
                        </SubMenu>
                    </Menu>
                </ProSidebar>
            </div>

        </>
    );
}

export default Sidebar;
