import './PostFooter.css';

const PostFooter = (props: { username: string, caption: string, likes: number}) => {
    return (
        <div className="post-footer">
            <div className="post-footer-details">
                <p>{props.username} <span className="caption">{props.caption}</span></p>
            </div>
            <p><span className="likes">{props.likes}</span> Likes</p>
        </div>
    );
}

export default PostFooter;