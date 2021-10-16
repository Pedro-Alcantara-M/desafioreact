const initialState = {
  data: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'Servers':
      return { ...state, servers: action.payload };
    default:
      return state;
  }
}
export { initialState, reducer }