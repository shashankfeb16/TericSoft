import { ERROR_DATA, LOADING_DATA, SUCCESS_DATA, SUCCESS_USER_DATA } from "./action.types";

const initialState = {
  isLoading: false,
  isError: false,
  data: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_DATA: {
      return { ...state, isLoading: true, isError: false };
    }
    case SUCCESS_DATA: {
      return { ...state.data, data: payload };
    }
    case ERROR_DATA: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
