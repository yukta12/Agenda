import {combineReducers} from "redux";

import ToDoReducer from "./todo-reducer";

const RootReducer = combineReducers({
   ToDoReducer
});

export default RootReducer;


// THIS IS HOW IT IS DONE
// Store(State) : {
//     ToDoReducer : {
//         items : []
//     }
//     ReminderReducer : {
//         reminders : []
//     }
// }