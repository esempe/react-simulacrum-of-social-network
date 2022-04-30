const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) =>{
    switch (action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            state.messageData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;
        default: return state;
    }
}


export  default dialogsReducer;

export const sendMessageActionCreator = () => ({type:SEND_MESSAGE})
export const updateNewMessegeActionCreator = (message)=> ({type:UPDATE_NEW_MESSAGE,
        newMessage: message}
)