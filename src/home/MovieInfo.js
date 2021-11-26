import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchMovieInfo } from '../store/actions/movieActionInfo';
import Table from '@mui/material/Table';
import { Link } from "react-router-dom";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import ImageLoader from '../imageLoader';

function MovieInfo(props) {
    const { movieInfo } = props
    useEffect(() => {
        props.fetchMovieInfo(props.match.params.id)
    }, [])
    return (
        <React.Fragment>
            <div className="movieInfoContainer">
                <div className="image">
                    <ImageLoader path={movieInfo.poster_path} />
                </div>
                <div>
                    <h2 className="header"> Title:{movieInfo.title}</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400 }} aria-label="caption table">
                            <TableHead >
                                <TableRow >
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }}>original_language:</TableCell>
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }} align="right">{movieInfo.original_language}</TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }}>Released:</TableCell>
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }} align="right">{movieInfo.release_date}</TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }}>Rated:</TableCell>
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }} align="right">{movieInfo.vote_average}</TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }}>vote_count:</TableCell>
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }} align="right">{movieInfo.vote_count}</TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }}>popularity:</TableCell>
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }} align="right">{movieInfo.popularity}</TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }}>tagline:</TableCell>
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }} align="right">{movieInfo.tagline}</TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }}>status:</TableCell>
                                    <TableCell style={{ fontSize: "20px", fontWeight: "bold" }} align="right">{movieInfo.status}</TableCell>
                                </TableRow>

                            </TableHead>
                        </Table>
                    </TableContainer>
                </div>

            </div>
            <div className="goBack">
                <h3 className="">About </h3>
                <div className="paragraph">{movieInfo.overview}</div>
                <Link to="/" className="divButton">
                    Go Back To Search
                </Link>
                {movieInfo.homepage ? <Button variant="contained" href={movieInfo.homepage} color="success" style={{ margin: "0px 0px 5px 8px", padding: "6px 25px" }}>
                    Watch trailer and more About
                </Button> : null}

            </div>
        </React.Fragment>

    )
}



const mapStateToProps = (state) => {
    return {
        movieInfo: state.movieInfo.movieInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieInfo: (id) => dispatch(fetchMovieInfo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo)
