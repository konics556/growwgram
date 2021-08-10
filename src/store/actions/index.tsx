import { AxiosResponse } from 'axios';

import unsplash from '../../utils/apis/unsplash';
import { IPost } from '../../utils/types/growwgram';
import { AppDispatch } from '../../utils/types/redux';

export const fetchRandomPosts = () => {
    return async function(dispatch: AppDispatch) {
        const response: AxiosResponse = await unsplash.get('/photos/random', {
            params: {
                count: 10
            }
        });

        const processedResponse: (IPost & {id: string})[] = response.data.map( (post: any) => {
            return {
                id: post.id,
                username: post.user.username,
                photo: post.urls.regular,
                location: post.location.name,
                caption: post.description,
                likes: post.likes
            }
        });

        dispatch({ type: 'FETCH_RANDOM_POSTS', payload: processedResponse })
    }
};
