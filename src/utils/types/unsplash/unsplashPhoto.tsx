export interface UnsplashPhoto {
    id: string;
    created_at: Date;
    updated_at: Date;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    downloads: number;
    likes: number;
    liked_by_user: boolean;
    description: string;
    exif: Exif;
    location: Location;
    current_user_collections: CurrentUserCollection[];
    urls: Urls;
    links: Links;
    user: User;
}

export interface Exif {
    make: string;
    model: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
}

export interface Location {
    name: string;
    city: string;
    country: string;
    position: Position;
}

export interface Position {
    latitude: number;
    longitude: number;
}

export interface User {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    instagram_username: string;
    twitter_username: string;
    links: Links;
    profile_image: ProfileImage;
}

export interface ProfileImage {
    large: string;
    medium: string;
    small: string;
}

export interface Links {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
}

export interface CurrentUserCollection {
    id: number;
    title: string;
    published_at: Date;
    last_collected_at: Date;
    updated_at: Date;
    cover_photo: string;
    user: string;
}

export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}
