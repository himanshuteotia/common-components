import { useState } from 'react';
import { addTodo } from './todos-service';

function AddTodoForm() {
  const [todoText, setTodoText] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    await addTodo(todoText);
    setTodoText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={event => setTodoText(event.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}



