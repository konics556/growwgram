import './UserDetailsHeader.css';

import {
  UnsplashUserProfile,
} from '../../../utils/types/unsplash/unsplashUserProfile';

const UserDetailsHeader = (props: {userProfile: UnsplashUserProfile}) => {
    return (
        <div className="user-details-header">
            {props.userProfile.bio}
        </div>
    );
}

export default UserDetailsHeader;