import './Feed.css';

import React from 'react';

import {
  connect,
  ConnectedProps,
} from 'react-redux';

import Post from '../../common/Post/Post';
import { fetchRandomPosts } from '../../store/actions';
import { IPost } from '../../utils/types/growwgram';
import { RootState } from '../../utils/types/redux';

const mapStateToProps = (state: RootState) => {
    return { posts: state.posts }
}

const connector = connect(mapStateToProps, { fetchRandomPosts })

class Feed extends React.Component<ConnectedProps<typeof connector>> {
    componentDidMount() {
        this.props.fetchRandomPosts();
    }

    renderPosts() {
        return this.props.posts.map( (post: IPost & {id: string}) => {
            return (
                <Post key={post.id} username={post.username} photo={post.photo} location={post.location} caption={post.caption} likes={post.likes} />
            )
        })
    }

    render() {
        return (
            <div className="feed">
                {this.renderPosts()}
            </div>
        );
    }
}

export default connector(Feed);