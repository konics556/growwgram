import './UserDetailsHeaderRightStats.css';

import React from 'react';

interface MyProps {
    photos: number,
    followers: number,
    following: number
}
function UserDetailsHeaderRightStats(props: MyProps) {
    return (
        <div className="user-details-header-rights-stats">
            <div className="stat">
                <span className="num">{props.photos}</span><span className="datatype"> Photos</span>
            </div>
            <div className="stat">
                <span className="num">{props.followers}</span><span className="datatype"> Followers</span>
            </div>
            <div className="stat">
                <span className="num">{props.following}</span><span className="datatype"> Following</span>
            </div>
        </div>
    )
}

export default UserDetailsHeaderRightStats
