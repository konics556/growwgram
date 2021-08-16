import './GridPhoto.css';

import React from 'react';

function GridPhoto(props: {photo: string, likes: number, description: string}) {
    return (
        <div className="grid-photo">
            <img src={props.photo} alt={props.description} />
            {/* <div className="grid-likes">{props.likes}</div> */}
        </div>
    )
}

export default GridPhoto
