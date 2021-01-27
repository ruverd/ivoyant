const INITIAL_STATE = {
  isLoading: false,
};

function loading(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@loading/TOGGLE': {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    default: {
      return state;
    }
  }
}

export default loading;
