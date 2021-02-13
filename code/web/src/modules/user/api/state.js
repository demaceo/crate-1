// App Imports
import { isEmpty } from "../../../setup/helpers";
import {
  SET_USER,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGOUT,
  ASSIGN_STYLE_TYPE,
} from "./actions";

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null,
};

// State
export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading,
      };

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case ASSIGN_STYLE_TYPE:
      return {
        ...state,
        isLoading: false,
        id: action.id,
        survey: action.survey,
        style: action.stylePreference,
        error: null,
      };

    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null,
      };

    default:
      return state;
  }
};
