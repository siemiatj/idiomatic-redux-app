import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';
import TodoList from '../components/TodoList';

const mapStateToProps = (state, { params }) => {
  return {
    todos: getVisibleTodos(
      state,
      params.filter || 'all'
     )
  };
};

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;

