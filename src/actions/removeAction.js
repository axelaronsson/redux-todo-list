const removeAction = payload => ({
  type: 'REMOVE_TODO',
  id: payload,
});

export default removeAction;
