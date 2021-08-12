import './UserDetails.css';

import { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useParams } from 'react-router-dom';

import Loading from '../../common/Loading/Loading';
import { fetchUserProfile } from '../../store/actions';
import { RootState } from '../../utils/types/redux';
import UserDetailsHeader from './UserDetailsHeader/UserDetailsHeader';

const UserDetails = () => {
    const { username } = useParams<{username: string}>();
    const userProfile = useSelector((state: RootState) => state.userProfile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserProfile(username));
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
                    {userProfile.userProfileError}
                </div>
            );
        }
        else if(userProfile.userProfile){
            return (
                <div className="user-details">
                    <UserDetailsHeader userProfile={userProfile.userProfile}/>
                </div>
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