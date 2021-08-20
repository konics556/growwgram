import './UserDetailsPhotos.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import ErrorMessage from '../../../common/ErrorMessage/ErrorMessage';
import Grid from '../../../common/Grid/Grid';
import Loading from '../../../common/Loading/Loading';
import Post from '../../../common/Post/Post';
import {
  clearUserPhotos,
  fetchUserPhotos,
} from '../../../store/actions';
import useInfiniteScroll from '../../../utils/hooks/useInfiniteScroll';
import { RootState } from '../../../utils/types/redux';

function UserDetailsPhotos(props: { username: string, totalPhotos: number }) {
    const userPhotos = useSelector((state: RootState) => state.userPhotos)
    const dispatch = useDispatch();

    const [showGrid, setShowGrid] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [page, loaderRef] = useInfiniteScroll(hasMore, userPhotos.isUserPhotosLoading);

    useEffect(() => {
        setHasMore(userPhotos.userPhotos.length < props.totalPhotos);
        dispatch(fetchUserPhotos(props.username, page));
    }, [page]);

    useEffect(() => {
        return () => { dispatch(clearUserPhotos()) }
    }, [])

    const renderContent = () => {
        if (userPhotos.userPhotosError) {
            <ErrorMessage message={userPhotos.userPhotosError.message} />
        }
        else if (userPhotos.userPhotos) {
            if (showGrid) {
                return (
                    <Grid userPhotos={userPhotos.userPhotos} />
                );
            }
            else {
                return (
                    <div className="posts-list">
                        {userPhotos.userPhotos.map(photo => {
                            return <Post key={photo.id} photo={photo} />
                        })}
                    </div>
                );
            }
        }
    }

    const renderSmallScreen = () => {
        if (userPhotos.userPhotosError) {
            return <ErrorMessage message={userPhotos.userPhotosError.message} />
        }
        else if (userPhotos.userPhotos) {
            return userPhotos.userPhotos.map(photo => {
                return <Post key={photo.id} photo={photo} />
            })
        }
    }

    return (
        <div className="user-details-photos">
            <div className="button-container">
                <div className={`button ${showGrid ? 'active' : ''}`} onClick={() => { setShowGrid(true) }}>GRID</div>
                <div className={`button ${!showGrid ? 'active' : ''}`} onClick={() => { setShowGrid(false) }}>POSTS</div>
            </div>
            <div className="photos">
                {renderContent()}
            </div>
            <div className="small-screen posts-list">
                {renderSmallScreen()}
            </div>
            {hasMore && <div ref={loaderRef}><Loading /></div>}
        </div>
    )
}

export default UserDetailsPhotos;
