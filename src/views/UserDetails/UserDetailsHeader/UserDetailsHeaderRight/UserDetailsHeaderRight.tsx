import './UserDetailsHeaderRight.css';

import React from 'react';

import {
  UnsplashUserProfile,
} from '../../../../utils/types/unsplash/unsplashUserProfile';
import UserDetailsHeaderRightStats
  from './UserDetailsHeaderRightStats/UserDetailsHeaderRightStats';

function UserDetailsHeaderRight(props: { userProfile: UnsplashUserProfile }) {
  return (
    <div className="user-details-header-right">
      <div className="username">{props.userProfile.username}</div>
      <div className="stats">
        <UserDetailsHeaderRightStats photos={props.userProfile.total_photos} followers={props.userProfile.followers_count} following={props.userProfile.following_count} />
      </div>
      <div className="name">{props.userProfile.name}</div>
      <div className="bio">{props.userProfile.bio}</div>
      <div className="location">{props.userProfile.location}</div>
    </div>
  )
}

export default UserDetailsHeaderRight
