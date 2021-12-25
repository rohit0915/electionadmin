import React from 'react';
import HOC from "../../Common/HOC.jsx"
import "./AdminUser.css";

//material ui data table
import { Card, Grid, Button } from "@material-ui/core";

import { useNavigate } from 'react-router-dom';

function AddAdminUser(props) {
    const navigate = useNavigate();
    return (
        <>
            <div className="Page_width content_padding" >
                <div className="ml-3 mr-3">
                    <div className="Content_topHeading">
                        Manage Admin
                    </div>
                    <hr />

                    <div className="text-center sub_content mt-3 mb-2">Add Admin</div>

                    <div className="mb-3">
                        <Card className="p-2 Card_shadow mt-2">
                            <div className="Form_heading">Personal Information</div>
                            <Grid className="Component_main_grid">
                                <Grid item md={1} className="p-2">
                                </Grid>
                                <Grid item md={10} sm={12} className="p-3">
                                    <div className="text_feild_heading">First Name</div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter First Name"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text_feild_heading mt-1">Last Name</div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Last Name"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text_feild_heading mt-1">Email ID</div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Email ID"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text_feild_heading mt-1">Mobile No</div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Mobile No"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text_feild_heading mt-1">Password</div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Password"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text_feild_heading mt-1">Designation</div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Designation"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text_feild_heading mt-1">Address</div>
                                    <div>
                                        <textarea
                                            rows="3"
                                            placeholder="Enter Address"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text_feild_heading mt-1">Permission</div>
                                    <div>
                                        <table class="table table-responsive">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th scope="col">Module</th>
                                                    <th scope="col">List</th>
                                                    <th scope="col">Add</th>
                                                    <th scope="col">Edit</th>
                                                    <th scope="col">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Manage Admin Users</th>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Manage Users</th>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Manage Leaders</th>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Manage Created Templates</th>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                </tr>


                                                <tr>
                                                    <th scope="row">Manage Group List</th>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Manage Video List</th>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Manage Template</th>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                </tr>


                                                <tr>
                                                    <th scope="row">Post Video</th>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Post Template</th>
                                                    <td><input type="checkbox" className="form-contol" /></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="text_feild_heading mt-1">Status</div>
                                    <div>
                                        <select class="form-control" >
                                            <option>Select Status</option>
                                            <option>Active</option>
                                            <option>InActive</option>
                                        </select>
                                    </div>

                                    <div className="text-right mt-3 mb-3">
                                        <span className="mr-2">
                                            <Button className="add_button mr-2" onClick={() => navigate(-1)}>Back</Button>
                                        </span>
                                        <span> <Button className="add_button">Submit</Button></span>
                                    </div>
                                </Grid>
                                <Grid item md={1} className="p-2"></Grid>
                            </Grid>


                        </Card>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(AddAdminUser)
