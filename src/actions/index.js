const addTodo = payload => ({
  type: 'ADD_TODO',
  id: payload.id,
  title: payload.title,
  description: payload.description,
  isDone: payload.isDone,
});

export default addTodo;
