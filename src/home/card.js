import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./home.css"
import { Link } from "react-router-dom";

function Cards(props) {
    let { movie, index } = props
    return (
        <div className="displayed" key={index}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
                <Card sx={{ maxWidth: 200 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            // height="300"
                            style={{ borderRadius: "6px 0px 0px", maxHeight: "278px" }}
                            image={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                             />
                        <CardContent style={{ backgroundColor: "black" }}>
                            <Typography style={{ maxHeight: "25px", lineHeight: "20px", fontWeight: "bold", color: "wheat" }}>
                                {movie.original_title}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    )
}






export default Cards

