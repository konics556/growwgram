import { combineReducers } from 'redux';

import randomPostsReducer from './randomPostsReducer';
import userProfileReducer from './userProfileReducer';

export default combineReducers({
    posts: randomPostsReducer,
    userProfile: userProfileReducer
});