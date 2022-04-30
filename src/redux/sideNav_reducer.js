let initialState = {
        friendsList: [
            {id: 1, friendsName: 'Rina', friendsAva: 'ʕ•́ᴥ•̀ʔ'},
            {id: 2, friendsName: 'DedoDed', friendsAva: 'ヽ(°□° )ノ'},
            {id: 3, friendsName: 'Ser', friendsAva: '(•ω•)'}
        ]

}

const sideNav_reducer =
    (state = initialState, action) => {

        return state;
    }

export default sideNav_reducer;

/* sideNav: {
     friendsList: [
         {id: 1, friendsName: 'Rina', friendsAva: 'ʕ•́ᴥ•̀ʔ'},
         {id: 2, friendsName: 'DedoDed', friendsAva: 'ヽ(°□° )ノ'},
         {id: 3, friendsName: 'Ser', friendsAva: '(•ω•)'}
     ]
 }*/