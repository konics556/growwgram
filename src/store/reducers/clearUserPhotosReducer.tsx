import { UserPhotos } from '../../utils/types/redux';
import { CLEAR_USER_PHOTOS } from '../actions';

const clearUserPhotos = (state: UserPhotos, action: {type: string}) => {
    switch (action.type) {
        case CLEAR_USER_PHOTOS:
            return {...state, UserPhotos: []}
        default:
            return state;
    }
};

export default clearUserPhotos;