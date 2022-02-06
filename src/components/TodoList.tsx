import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

export default function TodoList() {
  const {todos, loading, error, page, limit } = useTypedSelector(state => state.todos)
  const {fetchTodos, setTodosPage} = useActions()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.length && todos.map(todo => (
        <h3 key={todo.id}>{todo.id} - {todo.title}</h3>
      ))}
      <div style={{display: 'flex'}}>
        {pages.map(p => 
          <div
            key={p}
            style={{padding: 10, border: page === p ? '2px solid green' : '1px solid gray'}}
            onClick={() => setTodosPage(p)}
          >
            {p}
          </div>
        )}
      </div>
    </div>
  )
}
