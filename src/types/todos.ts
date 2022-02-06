export enum TodosActionTypes {
  FETCH_TODO = 'FETCH_TODO',
  FFETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE'
}

export interface TodosState {
  todos: any[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

interface FetchTodosAction {
  type: TodosActionTypes.FETCH_TODO
}

interface FetchTodosSuccessAction {
  type: TodosActionTypes.FFETCH_TODO_SUCCESS
  payload: any[]
}

interface FetchTodosErrorAction {
  type: TodosActionTypes.FETCH_TODO_ERROR
  payload: string
}

interface SetTodoPage {
  type: TodosActionTypes.SET_TODO_PAGE
  payload: number
}

export type TodosAction = FetchTodosAction |FetchTodosSuccessAction | FetchTodosErrorAction | SetTodoPage