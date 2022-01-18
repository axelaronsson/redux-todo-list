const todos = (state = [], action) => {
  switch (action.type) {
    case 'INIT_STATE':
      return action.data;
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          isDone: action.isDone,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          const newTodo = {
            ...todo,
            isDone: !todo.isDone,
          };
          return newTodo;
        }
        return todo;
      });
    case 'REMOVE_TODO':
      return state.filter(item => (item.id !== action.id));
    case 'UPDATE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          const newTodo = {
            ...todo,
            title: action.title,
            description: action.description,
          };
          return newTodo;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
