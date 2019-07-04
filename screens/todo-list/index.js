import {connect} from 'react-redux';
import ToDoListComponent from './todo-list.component';
import {checkItem,fetchPendingItems} from './todo-list.actions';

const mapStateToProps = (state) => ({
   items : state.ToDoReducer.items,
   pendingItems : state.ToDoReducer.pendingItems
});

const mapDispatchToProps =(dispatch) => ({
   fetchPendingItems : () => dispatch(fetchPendingItems()),
   checkItem: (key) => dispatch(checkItem(key))
});

export default connect(mapStateToProps,mapDispatchToProps)(ToDoListComponent);