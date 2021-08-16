import './Grid.css';

import { UnsplashPhoto } from '../../utils/types/unsplash/unsplashPhoto';
import GridPhoto from './GridPhoto/GridPhoto';

function Grid(props: { userPhotos: UnsplashPhoto[] }) {
    const renderPhotos = () => props.userPhotos.map((photo: UnsplashPhoto) => (
        <GridPhoto key={photo.id} photo={photo.urls.regular} likes={photo.likes} description={photo.description} / >
    ))

    return (
        <div className="grid">
            {renderPhotos()}
        </div>
    )
}

export default Grid
