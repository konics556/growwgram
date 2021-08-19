import { AxiosResponse } from 'axios';
import { handle } from 'redux-pack';

import {
  FetchUserProfileAction,
  UserProfile,
} from '../../utils/types/redux';
import { UnsplashError } from '../../utils/types/unsplash/unsplashError';
import {
  UnsplashUserProfile,
} from '../../utils/types/unsplash/unsplashUserProfile';
import {
  CLEAR_USER_PROFILE,
  FETCH_USER_PROFILE,
} from '../actions';

const initialState: UserProfile = {
    isUserProfileLoading: false,
    userProfileError: null,
    userProfile: null
}

const userProfileReducer = (state: UserProfile = initialState, action: FetchUserProfileAction) => {
    switch (action.type) {
        case FETCH_USER_PROFILE:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isUserProfileLoading: true,
                    userProfileError: null
                }),
                finish: prevState => ({ ...prevState, isUserProfileLoading: false }),
                failure: prevState => ({ ...prevState, userProfileError: action.payload as UnsplashError}),
                success: prevState => ({ ...prevState, userProfile: (action.payload as AxiosResponse<UnsplashUserProfile>).data }),
            });
        case CLEAR_USER_PROFILE:
            return { ...state, userProfile: null}
        default:
            return state;
    }
};

export default userProfileReducer;