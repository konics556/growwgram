import { combineReducers } from 'redux';

import randomPostsReducer from './randomPostsReducer';
import userPhotosReducer from './userPhotosReducer';
import userProfileReducer from './userProfileReducer';

export default combineReducers({
    posts: randomPostsReducer,
    userProfile: userProfileReducer,
    userPhotos: userPhotosReducer
});