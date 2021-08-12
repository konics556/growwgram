import { handle } from 'redux-pack';

import {
  FetchRandomPostsAction,
  RandomPost,
} from '../../utils/types/redux';

const initialState: RandomPost = {
    isRandomPostsLoading: false,
    randomPostsError: null,
    randomPosts: null
}

const randomPostsReducer = (state: RandomPost = initialState, action: FetchRandomPostsAction) => {
    switch (action.type) {
        case 'FETCH_RANDOM_POSTS':
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isRandomPostsLoading: true,
                    randomPostError: null
                }),
                finish: prevState => ({ ...prevState, isRandomPostsLoading: false }),
                failure: prevState => ({ ...prevState, randomPostsError: (Array.isArray(action.payload.data)) ? null : action.payload.data}),
                success: prevState => ({ ...prevState, randomPosts: (Array.isArray(action.payload.data)) ? action.payload.data : null }),
            });
        default:
            return state;
    }
};

export default randomPostsReducer;