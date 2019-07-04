import {connect} from 'react-redux';

import NewToDoComponent from "./new-todo.component";

import {addItem,onMessageChange} from "./new-todo.actions";

const mapStateToProps = (state) => ({
    messageText : state.ToDoReducer.messageText
});

const mapDispatchToProps = (dispatch) => ({
   onMessageChange : (text) => dispatch(onMessageChange(text)),
   addItem:() => dispatch(addItem())
});

export default connect(mapStateToProps,mapDispatchToProps)(NewToDoComponent);