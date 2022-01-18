const hideTodos = (state = false, action) => {
  switch (action.type) {
    case 'HIDE_SHOW':
      return !state;
    default:
      return state;
  }
};

export default hideTodos;
