import './PostFooter.css';

const PostFooter = (props: { username: string, caption: string, likes: number }) => {
    return (
        <div className="post-footer">
            <div className="post-footer-details-left"><span className="username">{props.username}</span> {props.caption}</div>
            <div className="post-footer-details-right"><span className="likes">{props.likes}</span> Likes</div>
        </div>
    );
}

export default PostFooter;