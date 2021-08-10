import './PostHeader.css';

import UserProfilePic from '../../UserProfilePic/UserProfilePic';

const PostHeader = (props: {username: string, location: string}) => {
    return (
        <div className="post-header">
            <UserProfilePic />
            <div className="user-name">
                <p>{props.username}</p>
                <p className="location">{props.location}</p>
            </div>
        </div>
    );
}

export default PostHeader;