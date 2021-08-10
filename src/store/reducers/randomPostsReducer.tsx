const randomPostsReducer = (state = [], action: any) => {
    switch(action.type) {
        case 'FETCH_RANDOM_POSTS':
            return action.payload;
        default:
            return state;
    }
};

export default randomPostsReducer;