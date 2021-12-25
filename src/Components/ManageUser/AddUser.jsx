import React, { useState } from 'react';
import HOC from "../../Common/HOC.jsx"

//material ui data table
import { Card, Grid, Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

function AddUser(props) {
    const navigate = useNavigate();

    const [indexArr, setindexAr] = useState([0])
    const [type, settype] = useState("Left")

    const HandleNoOfPhotos = (e) => {
        setindexAr([0])
        let index = e.target.value
        for (let i = 0; i < index - 1; ++i) {
            setindexAr(prev => {
                return [0, ...prev]
            })
        }
        console.log("jkhkj", indexArr)
    }

    const HandleRadioButtons = (e) => {  
        let type = e.target.value
        settype(type)
    }
    return (
        <>
            <div className="Page_width content_padding" >
                <div className="ml-3 mr-3">
                    <div className="Content_topHeading">
                        Manage User
                    </div>
                    <hr />

                    <div className="text-center sub_content mt-3 mb-2">Add User</div>

                    <div className="mb-3">
                        <Card className="p-2 Card_shadow mt-2">
                            <div className="Form_heading">Personal Information</div>
                            <Grid className="Component_main_grid">
                                <Grid item md={1} className="p-2">
                                </Grid>
                                <Grid item md={10} sm={12} className="p-3">
                                    <div className="text_feild_heading">Name</div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Name"
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

                                    <div className="text_feild_heading mt-1">Mobile No</div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Mobile No"
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
                                            <option>city 2</option>
                                        </select>
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

                                    <div className="text_feild_heading mt-1">Profile Photo</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>

                                    <div className="text_feild_heading mt-1">Number of Photos</div>
                                    <div>
                                        <select class="form-control" onChange={(e) => HandleNoOfPhotos(e)} >
                                            <option value="0">---select no. of photos---</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>

                                </Grid>
                                <Grid item md={1} className="p-2"></Grid>
                            </Grid>

                            {indexArr && indexArr.map((item, index) => {
                                return <div className='Card_shadow mt-2' key={index}>
                                    <Grid className="Component_main_grid">
                                        <Grid item md={4} className="p-2">
                                            <div className="text_feild_heading">Name</div>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    className="form-control"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item md={4} className="p-2">
                                            <div className="text_feild_heading">Designation</div>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Designation"
                                                    className="form-control"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item md={4} className="p-2">
                                            <div className="text_feild_heading">Image</div>
                                            <div>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            })}


                            <div className="Form_heading mt-3">Template Footer Information</div>
                            <Grid className="Component_main_grid">
                                <Grid item md={1} className="p-2">
                                </Grid>
                                <Grid item md={10} sm={12} className="p-3">

                                    <div className="text_feild_heading mt-1">Template Position</div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" value="Left" checked={type === "Left"} onChange={(e)=>HandleRadioButtons(e)} />
                                        <label class="form-check-label" for="inlineRadio1">Left Footer</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" value="Right" checked={type === "Right"} onChange={(e)=>HandleRadioButtons(e)}/>
                                        <label class="form-check-label" for="inlineRadio2">Right Footer</label>
                                    </div>
                                    {type === "Left" && (
                                        <div>
                                            <div className="text_feild_heading mt-1">Left Footer</div>
                                            <div>
                                                <input class="form-control" type="file" id="formFile" />
                                            </div>
                                        </div>
                                    )}

                                    {type === "Right" && (
                                        <div>
                                            <div className="text_feild_heading mt-1">Right Footer</div>
                                            <div>
                                                <input class="form-control" type="file" id="formFile" />
                                            </div>
                                        </div>
                                    )}


                                    {/* <div className="text_feild_heading mt-1"> Footer</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>


                                    <div className="text_feild_heading mt-1">Flexible Bottom Footer</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>


                                    <div className="text_feild_heading mt-1">Flexible Bottom Footer 2</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>

                                    <div className="text_feild_heading mt-1">Video Footer</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>

                                    <div className="text_feild_heading mt-1">Video Footer 2</div>
                                    <div>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div> */}

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

export default HOC(AddUser)
