import React, {useEffect } from 'react'
import "./header.css"
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { connect } from 'react-redux';
import { searchAction } from "../store/actions/SearchActions"
import { fetchMostPopular } from '../store/actions/mostPopularAction';
import { Button } from '@mui/material';
import Search from '../home/search';
import SearchIcon from '@mui/icons-material/Search';
function Header(props) {
    const [open, setOpen] = React.useState(false);

    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        props.fetchMostPopular()
    }, [])
    return (
        <div className="nav">
            <div className="container">
                <div className="header">Move App</div>
                <MovieFilterIcon fontSize="large" color="info"
                    style={{ fontSize: "80px", margin: "10px 20px 0px" }}
                />
            </div>
            <div className="search">
                <Button variant="contained" onClick={handleClickOpen}  startIcon={<SearchIcon />}>
                    Search
                </Button>
                <Search open={open} handleClose={handleClose} />
              

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searcMovie: state.searchMovies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchResult:
            (data) => {
                dispatch(searchAction(data))

            },
        fetchMostPopular:
            () => {
                dispatch(fetchMostPopular())

            }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
