import React, { useContext } from 'react';
import { TodoContext } from './todoContext.jsx/todoContext';

function TodoForm() {
  const { state, dispatch, todo, handleInputChange } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    if (todo.trim().length > 0) {
      dispatch({ type: 'Add', payload: { todo } }); // Use 'Add' here
    }
  };

  return (
    <main className="mt-8 w-10/12 m-auto flex justify-center">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          value={todo}
          onChange={handleInputChange}
          type="text"
          className="border-2 border-blue-500"
        />
        <input
          type="submit"
          value="Add"
          className="bg-blue-500 px-4 font-bold tracking-wide"
        />
      </form>
    </main>
  );
}

export default TodoForm;
