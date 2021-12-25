import React, { useState, useEffect } from "react";

//css file
import "./Login.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";
import electionlogo from "../images/electionlogo.png"
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="Login_Main_div content_padding">
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <div >
                        <img src={electionlogo} alt="" className="login_image" />
                    </div>
                    <div className="main_padding_top_bottom">
                        <div>
                            <TextField
                                placeholder="Email Address *"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"

                            />

                        </div>

                        <div className="mt-2">
                            <FormControl className="MuiFormControl-fullWidth" variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Password *"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="off"

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setshowPassword(!showPassword)}
                                                onMouseDown={(event) => event.preventDefault()}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                        </div>

                        <div className="inputfiledformatting mt-2">
                            <Button
                                variant="contained"
                                className="Login_page_button"
                                onClick={() => navigate("/dashboard")}

                            >
                                Log in
                            </Button>
                        </div>
                        <div className="text-right text-info hover_cursor  mb-3" >
                            Forgot Password?
                        </div>
                    </div>


                </Card>
            </div>

        </>
    );
};

export default Login;
