const updateAction = payload => ({
  type: 'UPDATE_TODO',
  id: payload.id,
  title: payload.title,
  description: payload.description,
});

export default updateAction;
