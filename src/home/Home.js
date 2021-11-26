import React, { useState } from 'react'
import { connect } from 'react-redux';
import Cards from "./card"
import "./home.css"
import Skeletoon from "../skeleton/skelton"
import { Grid } from '@mui/material';
import { fetchMostPopular } from '../store/actions/mostPopularAction';
import { fetchmoviesInTheartres } from '../store/actions/moviesInTheatresAction';
import { fetchhighestRated } from '../store/actions/highestRatedAction';
import { fetchPopularkidsMovies } from '../store/actions/kidsMoviesAction';
import { fetchbestMoviesFrom } from '../store/actions/bestMoviesFromAction';
import { fetchbestDramaThisYear } from '../store/actions/bestDramaThisYearAction';
import { fetchmoviesTomCruis } from '../store/actions/TomCruiseMoviesAction';
import { fetchhighestComedies } from "../store/actions/highestComediesAction";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function Home(props) {
    const [id, setid] = useState(1)
    const [yearDrama, setyearDrama] = useState("2021")
    const [yearBest, setyearBest] = useState("2021")
    const [alignment, setAlignment] = useState(1);


    function showMovies(movies, loading) {
        return (
            movies.map((movie, index) => (
                loading ?
                    <Grid item sm={4} xs={4} md={3} lg={2} key={index}>
                        <Skeletoon />
                    </Grid>
                    : <Grid item sm={4} xs={4} md={3} lg={2} key={index}>
                        <Cards movie={movie} key={index} />
                    </Grid>
            ))
        )
    }

    let mostPopularContent = showMovies(props.mostPopular, props.loadingHighest)
    let highestInTheatersContent = showMovies(props.highestInTheaters, props.loadingTheaters)
    let highestRatedContent = showMovies(props.hiestRated, props.loadingHighest)
    let kidsMoviesContent = showMovies(props.popularkidsMovies, props.loadingkidsMovies)
    let bestMoviesFromContent = showMovies(props.bestMoviesFrom, props.loadingbestMoviesFrom)
    let bestDramaThisYearContent = showMovies(props.bestDramaThisYear, props.loadingbestDramaThisYear)
    let tomCruiseMoviesContent = showMovies(props.tomCruiseMovies, props.loadingtomCruiseMovies)
    let hiestComidiesMoviesContent = showMovies(props.hiestComidies, props.loadinghiestComidies)


    const handelMostPopular = () => {
        setid(1)
        props.fetchMostPopular()
    }
    const handelInTheater = () => {
        setid(2)
        props.fetchmoviesInTheartres()
    }
    const handelHightestRated = () => {
        setid(3)
        props.fetchhighestRated()
    }
    const handelKidsMovies = () => {
        setid(4)
        props.fetchPopularkidsMovies()
    }
    const handelChangeYearForbestMovies = (e) => {
        setyearBest(e.target.value)
    }
    const handelBestMoviesFrom = () => {
        setid(5)
        props.fetchbestMoviesFrom(yearBest)
    }
    const handelChangeYearForbestDrama = (e) => {
        setyearDrama(e.target.value)
    }
    const handelBestDramaThisYear = () => {
        setid(6)
        props.fetchbestDramaThisYear(yearDrama)
    }
    const handelTomCruiseMovies = () => {
        setid(7)
        props.fetchmoviesTomCruis()
    }
    const handelHighestComediesMovies = () => {
        setid(8)
        props.fetchhighestComedies()
    }


    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (<>
        <ToggleButtonGroup value={alignment}
            exclusive
            onChange={handleAlignment}
            color="info"
            className="ButtonContainer"
        >
            <ToggleButton variant="contained" onClick={handelMostPopular} value={1}  >most popular movies</ToggleButton>

            <ToggleButton variant="contained" onClick={handelInTheater} value={2} >In-Theatres</ToggleButton>

            <ToggleButton variant="contained" onClick={handelHightestRated} value={3} >Highest Rated</ToggleButton>

            <ToggleButton variant="contained" onClick={handelKidsMovies} value={4}>Best Kids Movies</ToggleButton>

            <ToggleButton variant="contained" onClick={handelTomCruiseMovies} value={5} >Tom Cruise Movies</ToggleButton>

            <ToggleButton variant="contained" onClick={handelHighestComediesMovies} value={8} >Highest Comedies Movies</ToggleButton>

            <ToggleButton variant="contained" onClick={handelBestMoviesFrom} value={6}>Best Movies In
                <input type="text" onKeyDown={handelBestMoviesFrom} onChange={handelChangeYearForbestMovies}
                    placeholder="Year" className="fieldYear" value={yearBest} />
            </ToggleButton>

            <ToggleButton variant="contained" onClick={handelBestDramaThisYear} value={7} >Best Drama in year
                <input type="text" onKeyDown={handelBestDramaThisYear} onChange={handelChangeYearForbestDrama}
                    placeholder="Year" className="fieldYear" value={yearDrama} />
            </ToggleButton>

        </ToggleButtonGroup>
        <div className="homeContainer">
            <Grid container spacing={2}>
                {id === 1 ? mostPopularContent : id === 2 ?
                    highestInTheatersContent : id === 3 ?
                        highestRatedContent : id === 4 ?
                            kidsMoviesContent : id === 5 ?
                                bestMoviesFromContent : id === 6 ?
                                    bestDramaThisYearContent : id === 7 ?
                                        tomCruiseMoviesContent : id === 8 ?
                                            hiestComidiesMoviesContent : null}
            </Grid>
        </div>
    </>
    )
}
const mapStateToProps = (state) => {
    return {



        mostPopular: state.mostPopular.mostPopular,
        highestInTheaters: state.highestInTheaters.highestInTheaters,
        loadingHighest: state.mostPopular.loading,
        loadingTheaters: state.highestInTheaters.loading,
        hiestRated: state.hiestRated.hiestRated,
        loadingHiestRated: state.hiestRated.loading,
        popularkidsMovies: state.popularkidsMovies.popularkidsMovies,
        loadingkidsMovies: state.popularkidsMovies.loading,
        bestMoviesFrom: state.bestMoviesFrom.bestMoviesFrom,
        loadingbestMoviesFrom: state.bestMoviesFrom.loading,
        bestDramaThisYear: state.bestDramaThisYear.bestDramaThisYear,
        loadingbestDramaThisYear: state.bestDramaThisYear.loading,
        tomCruiseMovies: state.tomCruiseMovies.tomCruiseMovies,
        loadingtomCruiseMovies: state.tomCruiseMovies.loading,
        hiestComidies: state.hiestComidies.hiestComidies,
        loadinghiestComidies: state.hiestComidies.loading,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMostPopular:
            () => {
                dispatch(fetchMostPopular())

            },
        fetchmoviesInTheartres:
            () => {
                dispatch(fetchmoviesInTheartres())

            },
        fetchhighestRated:
            () => {
                dispatch(fetchhighestRated())

            },
        fetchPopularkidsMovies:
            () => {
                dispatch(fetchPopularkidsMovies())

            },
        fetchbestMoviesFrom:
            (date) => {
                dispatch(fetchbestMoviesFrom(date))

            },
        fetchbestDramaThisYear:
            (date) => {
                dispatch(fetchbestDramaThisYear(date))

            },
        fetchmoviesTomCruis:
            () => {
                dispatch(fetchmoviesTomCruis())

            },
        fetchhighestComedies:
            () => {
                dispatch(fetchhighestComedies())

            },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
