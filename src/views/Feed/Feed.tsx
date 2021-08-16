import './Feed.css';

import {
  useEffect,
  useState,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Loading from '../../common/Loading/Loading';
import Post from '../../common/Post/Post';
import { fetchRandomPosts } from '../../store/actions';
import useInfiniteScroll from '../../utils/hooks/useInfiniteScroll';
import { RootState } from '../../utils/types/redux';
import { UnsplashPhoto } from '../../utils/types/unsplash/unsplashPhoto';

const Feed = () => {
    const posts = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    const renderPosts = () => {
        if (posts.randomPostsError) {
            return (
                <div className="random-posts-error">
                    {posts.randomPostsError.status}
                </div>
            )
        }
        else if (posts.randomPosts) {
            return posts.randomPosts.map((post: UnsplashPhoto) => {
                return (
                    <Post key={post.id} username={post.user.username} photo={post.urls.regular} location={post.location.name} caption={post.description} likes={post.likes} profileImage={post.user.profile_image.medium} />
                )
            })
        }
    }

    const [hasMore] = useState(true);
    const [page, loaderRef] = useInfiniteScroll(hasMore, posts.isRandomPostsLoading);

    useEffect(() => {
        if(posts.isRandomPostsLoading) return;
        if(page >= 1) dispatch(fetchRandomPosts());
    }, [page])

    return (
        <div className="feed" >
            {renderPosts()}
            {/* <div className="temp"></div> */}
            {hasMore && <div ref={loaderRef}><Loading /></div>}
        </div>
    );
}

export default Feed;