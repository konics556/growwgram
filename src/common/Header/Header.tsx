import './Header.css';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { clearRandomPhotos } from '../../store/actions';
import { deleteStorage } from '../../utils/localStorage/localStorage';

function Header() {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleReload = () => {
        deleteStorage('randomPosts');
        dispatch(clearRandomPhotos());
        history.push('/');
    }

    return (
        <div className="header">
            <span className="title"></span>
            <span className="reload" onClick={handleReload}></span>
        </div>
    )
}

export default Header;