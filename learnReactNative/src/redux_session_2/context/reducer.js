export function reducer (state, action){
    switch(action.type){
        case "ADD_TO_FAVORITE":
            const newList = [ ...state.favoriteList ]  // mevcut listenin kopyasını aldım
            newList.push(action.payload.selectedRestaurant); // kaydettiğim restaurantı parametre ile gönderiyorum
            state.favoriteList = newList;
            return { ...state}
            
            // return { ...state, favoriteList: newList}
            // ecma6 ile favoriteList'i override etmiş olduk
            
            // ya da yukarıdakilari kullanmada sadece tek satırda kodumuzu bitirmiş olabiliyoruz
            // return { ...state, favoriteList: [ ...state.favoriteList,  action.payload.selectedRestaurant]}
        default:
            return state;
    }
}