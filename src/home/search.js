import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Grid, TextField } from '@mui/material';
import { connect } from 'react-redux';
import Cards from "./card"
import { searchAction } from '../store/actions/SearchActions';
import Skeletoon from "../skeleton/skelton"
import Alert from '@mui/material/Alert';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Search(props) {
    const [search, setsearch] = useState("")

    const handelChange = (e) => {
        setsearch(e.target.value)
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        props.searchResult(search)
    }
    let data = props.Movies
    let searchContent =
        data.total_pages > 0
            ? data.results.map((movie, index) => (
                props.loading ?
                    <Grid item sm={4} xs={4} md={3} lg={2} ><Skeletoon /> </Grid>
                    : <Grid item sm={4} xs={4} md={3} lg={2}  ><Cards movie={movie} key={index} /></Grid>
            ))
            : data.total_pages === 0 ? <div className="notFound">Movie not found!</div>
                : props.error ?
                    <div className="errormsg"> <Alert variant="filled" severity="error">
                        No Internet Please Check Your Connection!
                    </Alert></div>
                    : null
    return (
        <div>

            <Dialog
                fullScreen
                open={props.open}
                onClose={props.handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }} style={{backgroundColor:"black" ,padding:"20px"}}>
                    <Toolbar>

                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={props.handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Grid container spacing={3}>
                            <Grid item xs={9} />
                            <Grid item xs={3}>
                                <form onSubmit={handelSubmit}>
                                    <TextField
                                        id="filled-search"
                                        placeholder="Search"
                                        type="search"
                                        variant="outlined"
                                        value={search}
                                        autoFocus
                                        style={{ backgroundColor: "wheat", width: "300px", borderRadius: "10px", fontWeight: "bold" }}
                                        onChange={handelChange}

                                    />
                                </form>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={2}>

                    {searchContent}
                </Grid>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.searchMovies.loading,
        Movies: state.searchMovies.searchMovies,
        error: state.searchMovies.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchResult:
            (data) => {
                dispatch(searchAction(data))

            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
