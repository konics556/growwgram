import unsplash from '../../utils/apis/unsplash';
import {
  FetchAction,
  RandomPost,
} from '../../utils/types/redux';

export const FETCH_RANDOM_POSTS = 'FETCH_RANDOM_POSTS';
export const FETCH_RANDOM_POSTS_FROM_CACHE = 'FETCH_RANDOM_POSTS_FROM_CACHE';
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
export const FETCH_USER_PHOTOS = 'FETCH_USER_PHOTOS';
export const CLEAR_USER_PHOTOS = 'CLEAR_USER_PHOTOS';
export const CLEAR_USER_PROFILE = 'CLEAR_USER_PROFILE';

export const fetchRandomPosts = (): FetchAction | {type: string, payload: RandomPost} => {
    return {
        type: FETCH_RANDOM_POSTS,
        promise: unsplash.get('/photos/random', {
            params: {
                count: 10
            }
        })
    }
}


export const fetchUserProfile = (username: string): FetchAction => ({
    type: FETCH_USER_PROFILE,
    promise: unsplash.get(`/users/${username}`)
})

export const fetchUserPhotos = (username: string, pageNumber: number): FetchAction => ({
    type: FETCH_USER_PHOTOS,
    promise: unsplash.get(`/users/${username}/photos`, {
        params: {
            page: pageNumber,
            per_page: 9
        }
    })
})

export const clearUserPhotos = () => ({
    type: CLEAR_USER_PHOTOS,
})

export const clearUserProfile = () => ({
    type: CLEAR_USER_PROFILE,
})