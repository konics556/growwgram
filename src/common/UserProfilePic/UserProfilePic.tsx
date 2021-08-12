import './UserProfilePic.css';

const UserProfilePic = (props: {profileImageSmall: string} ) => {
    return (
        <div className="user-profile-pic">
            {/* <a href="http://localhost:3000">
            </a> */}
            <img src={props.profileImageSmall} alt="" />
        </div>
    );
}

export default UserProfilePic;