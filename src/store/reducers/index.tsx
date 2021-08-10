import { combineReducers } from 'redux';

import randomPostsReducer from './randomPostsReducer';

export default combineReducers({
    posts: randomPostsReducer
});