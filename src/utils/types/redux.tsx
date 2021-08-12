import { AxiosResponse } from 'axios';

import { UnsplashError } from './unsplash/unsplashError';
import { UnsplashPhoto } from './unsplash/unsplashPhoto';
import { UnsplashUserProfile } from './unsplash/unsplashUserProfile';

export interface RootState {
    posts: RandomPost,
    userProfile: UserProfile
}
export interface RandomPost {
    isRandomPostsLoading: boolean,
    randomPostsError: UnsplashError | null,
    randomPosts: UnsplashPhoto[] | null
}

export interface UserProfile {
    isUserProfileLoading: boolean,
    userProfileError: UnsplashError | null,
    userProfile: UnsplashUserProfile | null
}

export interface FetchRandomPostsAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashError | UnsplashPhoto[]>
}

export interface FetchUserProfileAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashError | UnsplashUserProfile>
}