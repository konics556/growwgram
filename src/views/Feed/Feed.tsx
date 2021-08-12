import './Feed.css';

import { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Loading from '../../common/Loading/Loading';
import Post from '../../common/Post/Post';
import { fetchRandomPosts } from '../../store/actions';
import { RootState } from '../../utils/types/redux';
import { UnsplashPhoto } from '../../utils/types/unsplash/unsplashPhoto';

const Feed = () => {
    const posts = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRandomPosts());
    }, [])
    const renderPosts = () => {
        if (posts.isRandomPostsLoading) {
            return (
                <Loading />
            );
        }
        else if (posts.randomPosts) {
            return posts.randomPosts.map((post: UnsplashPhoto) => {
                return (
                    <Post key={post.id} username={post.user.username} photo={post.urls.regular} location={post.location.name} caption={post.description} likes={post.likes} profileImage={post.user.profile_image.medium} />
                )
            })
        }
        else if (posts.randomPostsError) {
            return (
                <div className="random-posts-error">
                    {posts.randomPostsError}
                </div>
            )
        }
    }

    return (
        <div className="feed">
            {renderPosts()}
        </div>
    );
}

export default Feed;