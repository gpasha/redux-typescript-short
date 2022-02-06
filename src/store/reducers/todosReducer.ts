import { TodosAction, TodosActionTypes, TodosState } from "../../types/todos";

const initialState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10
}

export const todoReducer = (state: TodosState = initialState, action: TodosAction): TodosState => {
  switch(action.type) {
    case TodosActionTypes.FETCH_TODO:
      return {...state, loading: true}
    case TodosActionTypes.FFETCH_TODO_SUCCESS:
      return {...state, loading: false, todos: action.payload}
    case TodosActionTypes.FETCH_TODO_ERROR:
      return {...state, loading: false, error: action.payload}
    case TodosActionTypes.SET_TODO_PAGE:
      return {...state, page: action.payload}
    default:
      return state
  }
}