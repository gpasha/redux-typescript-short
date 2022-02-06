import axios from "axios"
import { Dispatch } from "react"
import { TodosAction, TodosActionTypes } from "../../types/todos"


export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({type: TodosActionTypes.FETCH_TODO})
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: page, _limit: limit}
      })
      dispatch({type: TodosActionTypes.FFETCH_TODO_SUCCESS, payload: response.data})
    } catch(e) {
      dispatch({
        type: TodosActionTypes.FETCH_TODO_ERROR,
        payload: 'Request error'
      })
    }
  }
}

export const setTodosPage = (page: number): TodosAction => {
  return {type: TodosActionTypes.SET_TODO_PAGE, payload: page}
}