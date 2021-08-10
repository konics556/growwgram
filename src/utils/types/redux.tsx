import { configureStore } from '@reduxjs/toolkit';

import randomPostsReducer from '../../store/reducers/randomPostsReducer';

const store = configureStore({
    reducer: {
        posts: randomPostsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;