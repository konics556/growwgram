import './UserDetailsHeaderLeft.css';

import UserProfilePic from '../../../../common/UserProfilePic/UserProfilePic';

function UserDetailsHeaderLeft(props: { profileImage: string }) {
    return (
        <div className="user-details-header-left">
            <UserProfilePic profileImage={props.profileImage} size='medium'/>
        </div>
    )
}

export default UserDetailsHeaderLeft;