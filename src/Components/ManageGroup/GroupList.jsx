import React from 'react';
import HOC from "../../Common/HOC.jsx"

//material ui data table
import { Card, Grid, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

import { useNavigate } from 'react-router-dom';

function GroupList(props) {
    const navigate = useNavigate();
    const classes = useStyles();

    const filterData = [];

    // for pagination hadler 
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <div className="Page_width content_padding" >
                <div className="ml-3 mr-3">
                    <div className="Content_topHeading">
                        Manage Group
                    </div>
                    <hr />

                    <div className="text-center sub_content mt-3 mb-2">Group List</div>

                    <div className="text-right"><Button className="add_button" onClick={() => navigate("/add-group")}>Add Group</Button></div>

                    <div className="mb-3">
                        <Card className="p-2 Card_shadow mt-2 card_height">
                            <Grid className="Component_main_grid">
                                <Grid item md={3} className="p-2">
                                    <input
                                        type="text"
                                        placeholder="Search by Name"
                                        className="form-control"
                                    />
                                </Grid>
                                <Grid item md={9} className="p-3"></Grid>
                            </Grid>
                            <TableContainer component={Paper}>
                                <Table
                                    className={classes.table}
                                    aria-label="customized table"

                                >
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell
                                                align="left"
                                                className="table_header"
                                            >
                                                Group Name
                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="left"
                                                className="table_header"
                                            >
                                                Group Logo
                                            </StyledTableCell>

                                            <StyledTableCell
                                                align="left"
                                                className="table_header"
                                            >
                                                Status
                                            </StyledTableCell>

                                            <StyledTableCell
                                                align="left"
                                                className="table_header"
                                            >
                                                Create Date
                                            </StyledTableCell>

                                            <StyledTableCell
                                                align="left"
                                                className="table_header"
                                            >
                                                Action
                                            </StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {(rowsPerPage > 0
                                            ? filterData.slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage +
                                                rowsPerPage
                                            )
                                            : filterData
                                        ).map((row) => (
                                            <StyledTableRow>
                                                <StyledTableCell
                                                    align="left"
                                                >

                                                </StyledTableCell>
                                                <StyledTableCell
                                                    align="left"
                                                >

                                                </StyledTableCell>
                                                <StyledTableCell
                                                    align="left"
                                                >

                                                </StyledTableCell>

                                                <StyledTableCell
                                                    align="left"
                                                >

                                                </StyledTableCell>

                                                <StyledTableCell
                                                    align="left"
                                                >

                                                </StyledTableCell>


                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <TablePagination
                                    true
                                    rowsPerPageOptions={false}
                                    component="div"
                                    count={filterData.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={
                                        handleChangeRowsPerPage
                                    }
                                />
                            </TableContainer>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    )
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },

});

export default HOC(GroupList)
