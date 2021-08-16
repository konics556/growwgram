import './UserDetailsMain.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Grid from '../../../common/Grid/Grid';
import Loading from '../../../common/Loading/Loading';
import { fetchUserPhotos } from '../../../store/actions';
import useInfiniteScroll from '../../../utils/hooks/useInfiniteScroll';
import { RootState } from '../../../utils/types/redux';

function UserDetailsMain(props: { username: string, totalPhotos: number }) {
    const userPhotos = useSelector((state: RootState) => state.userPhotos)
    const dispatch = useDispatch();
    const [hasMore, setHasMore] = useState(true);
    const [page, loaderRef] = useInfiniteScroll(hasMore, userPhotos.isUserPhotosLoading);

    useEffect(() => {
        setHasMore( userPhotos.UserPhotos.length < props.totalPhotos );
        if (userPhotos.isUserPhotosLoading) return;
        console.log(page, hasMore);
        dispatch(fetchUserPhotos(props.username, page));
    }, [page]);

    const renderContent = () => {
        if (userPhotos.UserPhotos) {
            return (
                <Grid userPhotos={userPhotos.UserPhotos} />
            )
        }
    }

    return (
        <div className="user-details-main">
            <hr />
            {renderContent()}
            {hasMore && <div ref={loaderRef}><Loading /></div>}
        </div>
    )
}

export default UserDetailsMain;
