import { handle } from 'redux-pack';

import {
  FetchUserPhotosAction,
  UserPhotos,
} from '../../utils/types/redux';
import { UnsplashPhoto } from '../../utils/types/unsplash/unsplashPhoto';
import { FETCH_USER_PHOTOS } from '../actions';

const initialState: UserPhotos = {
    isUserPhotosLoading: false,
    UserPhotosError: null,
    UserPhotos: []
}

const userPhotosReducer = (state: UserPhotos = initialState, action: FetchUserPhotosAction) => {
    switch (action.type) {
        case FETCH_USER_PHOTOS:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isUserPhotosLoading: true,
                    UserPhotosError: null
                }),
                finish: prevState => ({ ...prevState, isUserPhotosLoading: false }),
                failure: prevState => ({ ...prevState, UserPhotosError: (Array.isArray(action.payload.data)) ? null : action.payload.data}),
                success: prevState => ({ ...prevState, UserPhotos: [ ...prevState.UserPhotos, ...action.payload.data as UnsplashPhoto[] ] }),
            });
        default:
            return state;
    }
};

export default userPhotosReducer;