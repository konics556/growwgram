import { handle } from 'redux-pack';

import {
  FetchRandomPostsAction,
  RandomPost,
} from '../../utils/types/redux';
import { UnsplashPhoto } from '../../utils/types/unsplash/unsplashPhoto';
import { FETCH_RANDOM_POSTS } from '../actions';

const initialState: RandomPost = {
    isRandomPostsLoading: false,
    randomPostsError: null,
    randomPosts: []
}

const randomPostsReducer = (state: RandomPost = initialState, action: FetchRandomPostsAction) => {
    switch (action.type) {
        case FETCH_RANDOM_POSTS:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isRandomPostsLoading: true
                }),
                finish: prevState => ({ ...prevState, isRandomPostsLoading: false }),
                failure: prevState => ({ ...prevState, randomPostsError: action.payload}),
                success: prevState => ({ ...prevState, randomPosts: [ ...prevState.randomPosts, ...action.payload.data as UnsplashPhoto[] ] }),
            });
        default:
            return state;
    }
};

export default randomPostsReducer;