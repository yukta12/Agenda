import {ADD_ITEM_ACTION,
    CHECK_TODO_ITEM_ACTION,
    GET_PENDING_ITEMS_ACTION,
    ON_MESSAGE_CHANGE_ACTION} from "../action-types";

const INITIAL_STATE ={
  items:[],
  pendingItems:[],
  messageText:"",
};

const ToDoReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case CHECK_TODO_ITEM_ACTION :
            let key = action.data;
            let updatedItems = state.pendingItems.filter((items) => key !== item.key);
            return{...state,pendingItems: updatedItems};

        case GET_PENDING_ITEMS_ACTION :
            let pendingItems = state.items.filter((item) => !item.isChecked);
            return{...state,pendingItems:pendingItems};

        case ON_MESSAGE_CHANGE_ACTION :
            let text = action.data;
            return {...state,messageText: text};

        case ADD_ITEM_ACTION :
            let todoItem = {
                iisChecked : false,
                message : state.messageText,
                key : state.messageText
            };
            let updatedList = state.items;
            updatedList.push(todoItem);

            return {...state,items: updatedList,messageText:"",pendingItems:[]};

        default:
        //     let items = await Expo.SecureStore.getItemAsync("list");
        //     if(typeof items !== 'undefined'){
        //         items = JSON.parse(items);
        //     }
        //     return {...state,items:items};
            return state;
    }
};
export default ToDoReducer;