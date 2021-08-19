import './UserDetails.css';

import { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useParams } from 'react-router-dom';

import Loading from '../../common/Loading/Loading';
import {
  clearUserProfile,
  fetchUserProfile,
} from '../../store/actions';
import { RootState } from '../../utils/types/redux';
import UserDetailsHeader from './UserDetailsHeader/UserDetailsHeader';
import UserDetailsPhotos from './UserDetailsPhotos/UserDetailsPhotos';

const UserDetails = () => {
    const { username } = useParams<{username: string}>();
    const userProfile = useSelector((state: RootState) => state.userProfile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserProfile(username));
        return () => {
            dispatch(clearUserProfile());
        }
    }, []);

    const renderUserDetails = () => {
        if(userProfile.isUserProfileLoading){
            return (
                <Loading />
            );
        }
        else if(userProfile.userProfileError){
            return (
                <div className="user-profile-error">
                    {userProfile.userProfileError.message}
                </div>
            );
        }
        else if(userProfile.userProfile){
            return (
                <>
                    <UserDetailsHeader userProfile={userProfile.userProfile}/>
                    <UserDetailsPhotos username={userProfile.userProfile.username} totalPhotos={userProfile.userProfile.total_photos} />
                </>
            );
        }
    }
    return (
        <div className="user-details">
            {renderUserDetails()}
        </div>
    );
}

export default UserDetails;