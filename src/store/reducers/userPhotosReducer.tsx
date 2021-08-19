import { AxiosResponse } from 'axios';
import { handle } from 'redux-pack';

import {
  FetchUserPhotosAction,
  UserPhotos,
} from '../../utils/types/redux';
import { UnsplashError } from '../../utils/types/unsplash/unsplashError';
import { UnsplashPhoto } from '../../utils/types/unsplash/unsplashPhoto';
import {
  CLEAR_USER_PHOTOS,
  FETCH_USER_PHOTOS,
} from '../actions';

const initialState: UserPhotos = {
    isUserPhotosLoading: false,
    userPhotosError: null,
    userPhotos: []
}

const userPhotosReducer = (state: UserPhotos = initialState, action: FetchUserPhotosAction) => {
    switch (action.type) {
        case FETCH_USER_PHOTOS:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isUserPhotosLoading: true,
                    userPhotosError: null
                }),
                finish: prevState => ({ ...prevState, isUserPhotosLoading: false }),
                failure: prevState => ({ ...prevState, userPhotosError: action.payload as UnsplashError }),
                success: prevState => ({ ...prevState, userPhotos: [...prevState.userPhotos, ...(action.payload as AxiosResponse<UnsplashPhoto[]>).data] }),
            });
        case CLEAR_USER_PHOTOS:
            return { ...state, userPhotos: [] }
        default:
            return state;
    }
};

export default userPhotosReducer;