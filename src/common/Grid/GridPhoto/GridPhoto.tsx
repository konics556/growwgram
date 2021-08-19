import './GridPhoto.css';

import React from 'react';

function GridPhoto(props: {photo: string, likes: number, description: string}) {
    return (
        <div className="grid-photo">
            <div className="grid-likes"><span>{props.likes} Likes</span></div>
            <img src={props.photo} alt={props.description} />
        </div>
    )
}

export default GridPhoto
