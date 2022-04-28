const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
let store = {
    _callSubscriber(){
        console.log('state changed!')
    },
    _state: {
        dialogs: {
            messageData: [  //входные данные
                {id: 1, message: 'Hy h1w are you??'},
                {id: 2, message: 'bebra karpacho!'},
                {id: 3, message: 'noo way'},
                {id: 4, message: 'magick is dred'},
                {id: 5, message: 'falco and gabby'},
                {id: 6, message: 'my first message!!!'},
            ],
            conversationsData: [ //входные данные
                {id: 1, name: 'Rocky'},
                {id: 2, name: 'Anrew'},
                {id: 3, name: 'Anorick'},
                {id: 4, name: 'Anatoly'},
                {id: 5, name: 'Rocky'},
                {id: 6, name: 'Rocky'},
                {id: 7, name: 'Ramen'},
                {id: 8, name: 'Denzlo'},
            ],
            newMessageText: ''
        },

        userProfile: {
            postsData: [
                {id: 1, message: 'My new post', likeCount: '6'},
                {id: 2, message: 'I love to smell bebra', likeCount: '5'},
                {id: 3, message: '1 like and i will....', likeCount: '554'},
                {id: 4, message: 'aye salam basota', likeCount: '12'},
                {id: 5, message: 'magick is dred', likeCount: '1488'},
                {id: 6, message: 'falco and gabby', likeCount: '1327'},
                {id: 7, message: 'ramires little dirty', likeCount: '332'},
                {id: 8, message: 'my first post!!!', likeCount: '21'},
            ],
            newPostText: ''
        },
        sideNav: {
            friendsList: [
                {id: 1, friendsName: 'Rina', friendsAva: 'ʕ•́ᴥ•̀ʔ'},
                {id: 2, friendsName: 'DedoDed', friendsAva: 'ヽ(°□° )ノ'},
                {id: 3, friendsName: 'Ser', friendsAva: '(•ω•)'}

            ]
        }

    },


    getState(){
        return this._state
    },
    subscribe(observe){
        this._callSubscriber = observe;
    },

    addPost(){
        let newPost = {
            id: 5,
            message: this._state.userProfile.newPostText,
            likeCount: 0
        }
        this._state.userProfile.postsData.push(newPost);
        this.updateNewPostText('')
        this._callSubscriber();
    },
    updateNewPostText(newText){

        this._state.userProfile.newPostText = newText;
        this._callSubscriber(this._state);

    },
    dispatch(action){

        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.userProfile.newPostText,
                likeCount: 0
            }
            this._state.userProfile.postsData.push(newPost);
            this.updateNewPostText('')
            this._callSubscriber();

        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.userProfile.newPostText = action.newText;
            this._callSubscriber(this._state);

            // DIALOGS
        } else if(action.type === SEND_MESSAGE){
            let newMessage = {
                id: 5,
                message: this._state.dialogs.newMessageText,
            }
            this._state.dialogs.messageData.push(newMessage);
            this._state.dialogs.newMessageText = '';
            this._callSubscriber(this._state);
        }else if (action.type === UPDATE_NEW_MESSAGE){
            this._state.dialogs.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }

}
// userProfile + posts
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (postMessage) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: postMessage})
//dialogs
export const sendMessageActionCreator = () => ({type:SEND_MESSAGE})
export const updateNewMessegeActionCreator = (message)=> ({type:UPDATE_NEW_MESSAGE,
        newMessage: message}
)




window.store = store
export default store;

