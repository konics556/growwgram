import { AxiosResponse } from 'axios';
import { handle } from 'redux-pack';

import { setStorage } from '../../utils/localStorage/localStorage';
import {
  FetchRandomPostsAction,
  RandomPost,
} from '../../utils/types/redux';
import { UnsplashError } from '../../utils/types/unsplash/unsplashError';
import { UnsplashPhoto } from '../../utils/types/unsplash/unsplashPhoto';
import {
  CLEAR_RANDOM_PHOTOS,
  FETCH_RANDOM_POSTS,
  FETCH_RANDOM_POSTS_FROM_CACHE,
} from '../actions';

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
                failure: prevState => ({ ...prevState, randomPostsError: action.payload as UnsplashError }),
                success: prevState => {
                    const posts = [...prevState.randomPosts, ...(action.payload as AxiosResponse<UnsplashPhoto[]>).data];
                    if(posts.length === 10) setStorage('randomPosts', posts);
                    return { ...prevState, randomPosts: posts };
                },
            });
        case FETCH_RANDOM_POSTS_FROM_CACHE:
            return {
                isRandomPostsLoading: false,
                randomPosts: action.payload,
                ranDOmPostsError: null
            }
        case CLEAR_RANDOM_PHOTOS:
            return {
                isRandomPostsLoading: false,
                randomPosts: [],
                ranDOmPostsError: null
            }
        default:
            return state;
    }
};

export default randomPostsReducer;