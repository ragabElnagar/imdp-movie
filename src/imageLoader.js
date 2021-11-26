import React from 'react'

function ImageLoader(props) {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={`https://image.tmdb.org/t/p/w500${props.path}`}/>
    )
}

export default ImageLoader
