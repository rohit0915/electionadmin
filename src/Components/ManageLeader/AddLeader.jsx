import React from 'react';
import HOC from "../../Common/HOC.jsx"

//material ui data table
import { Card, Grid, Button } from "@material-ui/core";
import { useLocation } from 'react-router';

import { useNavigate } from 'react-router-dom';

function AddLeader(props) {
    const navigate = useNavigate();
    const { state } = useLocation()
    console.log("add Props", state)

    return (
        <>
            <div className="Page_width content_padding" >
                <div className="ml-3 mr-3">
                    <div className="Content_topHeading">
                        Manage Leader
                    </div>
                    <hr />

                    <div className="text-center sub_content mt-3 mb-2">Add Leader</div>

                    <div className="mb-3">
                        <Card className="p-2 Card_shadow mt-2">

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

                                    <div className="text_feild_heading mt-1">State</div>
                                    <div>
                                        <select class="form-control" >
                                            <option>--select state--</option>
                                            <option>Uttar Pradesh</option>
                                            <option>Delhi</option>
                                        </select>
                                    </div>

                                    <div className="text_feild_heading mt-1">City</div>
                                    <div>
                                        <select class="form-control" >
                                            <option>--select City--</option>
                                            <option>city 1 </option>
                                            <option>city 2F</option>
                                        </select>
                                    </div>

                                    <div className="text_feild_heading mt-1">Profile Photo</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>

                                    <div className="text_feild_heading mt-1">Party Name</div>
                                    <div>
                                        <select class="form-control" >
                                            <option>---party name---</option>
                                            <option>BJP</option>
                                            <option>BSP</option>
                                            <option>SP</option>
                                            <option>INC</option>
                                            <option>Individual</option>
                                            <option>RLD</option>
                                            <option>AAP</option>
                                            <option>pragartsheel samjwadi party (Lohia)</option>
                                            <option>ncp</option>
                                            <option>shivsena</option>
                                        </select>
                                    </div>


                                    <div className="text_feild_heading mt-1">Designation</div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Designation"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text_feild_heading mt-1">Status</div>
                                    <div>
                                        <select class="form-control" >
                                            <option>---select status---</option>
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

export default HOC(AddLeader)
