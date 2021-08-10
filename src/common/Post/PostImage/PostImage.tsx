import './PostImage.css';

const PostImage = (props: { photo: string }) => {
    return (
        <div className="post-image">
            <img alt="desc" src={props.photo}/>
        </div>
    );
}

export default PostImage;