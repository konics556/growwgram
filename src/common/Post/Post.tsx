import './Post.css';

import { IPost } from '../../utils/types/growwgram';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';

const Post = (props: IPost) => {
    return (
        <div className="post">
            <PostHeader username={props.username} location={props.location} profileImageSmall={props.profileImageSmall} />
            <PostImage photo={props.photo}/>
            <PostFooter username={props.username} caption={props.caption} likes={props.likes} />
        </div>
    );
}

export default Post;