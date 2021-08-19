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
    randomPostsError: UnsplashError | null,
    randomPosts: UnsplashPhoto[]
}
export interface FetchRandomPostsAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashPhoto[]> | UnsplashError
}
export interface UserProfile {
    isUserProfileLoading: boolean,
    userProfileError: UnsplashError | null,
    userProfile: UnsplashUserProfile | null
}
export interface FetchUserProfileAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashUserProfile> | UnsplashError
}
export interface UserPhotos {
    isUserPhotosLoading: boolean,
    userPhotosError: UnsplashError | null,
    userPhotos: UnsplashPhoto[]
}
export interface FetchUserPhotosAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashPhoto[]> | UnsplashError
}

export type FetchAction = {
    type: string;
    promise: Promise<AxiosResponse<any>>;
}