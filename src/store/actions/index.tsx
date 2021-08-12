import unsplash from '../../utils/apis/unsplash';

export const FETCH_RANDOM_POSTS = 'FETCH_RANDOM_POSTS';
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';

export const fetchRandomPosts = () => ({
    type: FETCH_RANDOM_POSTS,
    promise: unsplash.get('/photos/random', {
        params: {
            count: 10
        }
    })
})

export const fetchUserProfile = (username: string) => ({
    type: FETCH_USER_PROFILE,
    promise: unsplash.get(`/users/${username}`)
})