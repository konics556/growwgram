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
import {
  FETCH_RANDOM_POSTS_FROM_CACHE,
  fetchRandomPosts,
} from '../../store/actions';
import useInfiniteScroll from '../../utils/hooks/useInfiniteScroll';
import { getStorage } from '../../utils/localStorage/localStorage';
import { RootState } from '../../utils/types/redux';
import { UnsplashPhoto } from '../../utils/types/unsplash/unsplashPhoto';

const Feed = () => {
    const posts = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    const renderPosts = () => {
        if (posts.randomPostsError) {
            return (
                <div className="random-posts-error">
                    {posts.randomPostsError.message}
                </div>
            )
        }
        else if (posts.randomPosts) {
            return posts.randomPosts.map((post: UnsplashPhoto) => {
                return (
                    <Post key={post.id} photo={post} />
                )
            })
        }
    }

    const [hasMore] = useState(true);
    const [page, loaderRef] = useInfiniteScroll(hasMore, posts.isRandomPostsLoading);

    useEffect(() => {
        const cache = getStorage('randomPosts');
        if (cache) {
            dispatch({ type: FETCH_RANDOM_POSTS_FROM_CACHE, payload: cache });
            return;
        }
        if (posts.isRandomPostsLoading) return;
        if (page >= 1) dispatch(fetchRandomPosts());
    }, [page])

    return (
        <div className="feed" >
            {renderPosts()}
            {!posts.randomPostsError && hasMore && <div ref={loaderRef}><Loading /></div>}
        </div>
    );
}

export default Feed;