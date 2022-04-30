const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        {id: 1, message: 'My new post', likeCount: '6'},
        {id: 2, message: 'I love to smell bebra', likeCount: '5'},
        {id: 3, message: '1 like and i will....', likeCount: '554'},
        {id: 4, message: 'ramires little dirty', likeCount: '332'},
        {id: 5, message: 'my first post!!!', likeCount: '21'},
    ],
    newPostText: ''
}

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 666,
                message: state.newPostText,
                likeCount: '0'
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}

export default userProfileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (postMessage) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: postMessage})