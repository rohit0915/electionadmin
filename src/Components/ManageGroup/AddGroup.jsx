import React from 'react';
import HOC from "../../Common/HOC.jsx"

//material ui data table
import { Card, Grid, Button } from "@material-ui/core";
import { useLocation } from 'react-router';

import { useNavigate } from 'react-router-dom';

function AddGroup(props) {
    const navigate = useNavigate();
    const { state } = useLocation()
    console.log("add Props", state)

    return (
        <>
            <div className="Page_width content_padding" >
                <div className="ml-3 mr-3">
                    <div className="Content_topHeading">
                        Manage Group
                    </div>
                    <hr />

                    <div className="text-center sub_content mt-3 mb-2">Add Group</div>

                    <div className="mb-3">
                        <Card className="p-2 Card_shadow mt-2">

                            <Grid className="Component_main_grid">
                                <Grid item md={1} className="p-2">
                                </Grid>
                                <Grid item md={10} sm={12} className="p-3">
                                    <div className="text_feild_heading">Group Name</div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Group Name"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text_feild_heading mt-1">Group Logo</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>

                                    <div className="text_feild_heading mt-1">Footer Option 1</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>

                                    <div className="text_feild_heading mt-1">Footer Option 2</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>

                                    <div className="text_feild_heading mt-1">Footer Option 3</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>


                                    <div className="text_feild_heading mt-1">Footer Option 4</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>


                                    <div className="text_feild_heading mt-1">Footer Option 5</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>

                                    <div className="text_feild_heading mt-1">Footer Option 6</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>

                                    <div className="text_feild_heading mt-1">Footer Option 7</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>

                                    <div className="text_feild_heading mt-1">Footer Option 8</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
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

export default HOC(AddGroup)
