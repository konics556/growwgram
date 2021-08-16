import { AxiosResponse } from 'axios';

import { UnsplashError } from './unsplash/unsplashError';
import { UnsplashPhoto } from './unsplash/unsplashPhoto';
import { UnsplashUserProfile } from './unsplash/unsplashUserProfile';

export interface RootState {
    posts: RandomPost,
    userProfile: UserProfile,
    userPhotos: UserPhotos
}
export interface RandomPost {
    isRandomPostsLoading: boolean,
    randomPostsError: AxiosResponse<any> | null,
    randomPosts: UnsplashPhoto[]
}
export interface FetchRandomPostsAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashError | UnsplashPhoto[]>
}
export interface UserProfile {
    isUserProfileLoading: boolean,
    userProfileError: UnsplashError | null,
    userProfile: UnsplashUserProfile | null
}
export interface FetchUserProfileAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashError | UnsplashUserProfile>
}
export interface UserPhotos {
    isUserPhotosLoading: boolean,
    UserPhotosError: UnsplashError | null,
    UserPhotos: UnsplashPhoto[]
}
export interface FetchUserPhotosAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashError | UnsplashPhoto[]>
}

export type FetchAction = {
    type: string;
    promise: Promise<AxiosResponse<any>>;
}