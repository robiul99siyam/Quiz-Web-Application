import { actions } from "../actions";

const initalState = {
  quizs: [],
  loading: false,
  error: null,
};

const QuizReducers = (state, action) => {
  switch (action.type) {
    case actions.quiz.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }

    case actions.quiz.DATA_FETCHED: {
      return {
        ...state,
        quizs: action.data,
      };
    }

    case actions.quiz.DATA_FETCH_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};

export { initalState, QuizReducers };
