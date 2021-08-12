import './UserProfilePic.css';

const UserProfilePic = (props: { profileImage: string, size: string } ) => {
    return (
        <div className={`user-profile-pic-${props.size}`} >
            {/* <a href="http://localhost:3000">
            </a> */}
            <img src={props.profileImage} alt="" />
        </div>
    );
}

export default UserProfilePic;