interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "INCREMENT" | "DECREMENT";
}

export const countReducer = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "INCREMENT": {
      const newCount = state.count + 1;
      const hasError = state.count > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum count reached" : null,
      };
    }
    case "DECREMENT": {
      const newCount = state.count - 1;
      const hasError = state.count < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minum count reached" : null,
      };
    }
    default:
      return state;
  }
};

export default countReducer;
