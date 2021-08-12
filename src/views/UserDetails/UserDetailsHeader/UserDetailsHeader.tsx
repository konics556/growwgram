import './UserDetailsHeader.css';

import {
  UnsplashUserProfile,
} from '../../../utils/types/unsplash/unsplashUserProfile';
import UserDetailsHeaderLeft
  from './UserDetailsHeaderLeft/UserDetailsHeaderLeft';
import UserDetailsHeaderRight
  from './UserDetailsHeaderRight/UserDetailsHeaderRight';

const UserDetailsHeader = (props: {userProfile: UnsplashUserProfile}) => {
    return (
        <div className="user-details-header">
            <UserDetailsHeaderLeft profileImage={props.userProfile.profile_image.large}/>
            <UserDetailsHeaderRight userProfile={props.userProfile}/> 
        </div>
    );
}

export default UserDetailsHeader;