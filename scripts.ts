// Create interface/type for todo items
interface Todo {
    id: number;
    todo: string;
    completed: boolean;
};

// Grab needed DOM elements
const todoInput = document.querySelector('.todo_list--form--input') as HTMLInputElement;
const todoAdd = document.querySelector('.todo_list--form--input--submit') as HTMLInputElement;
const todoList = document.querySelector('.todo_list') as HTMLUListElement;

// Create todo array -- stores todo list items
let todos: Todo[] = [];

// Add todos function
function addTodo(todo: string) {
    const newTodo: Todo = {
        id: Date.now(),
        todo: todo,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}

// Remove a todo function
function removeTodo(id: number) {
    // Update todos
    todos = todos.filter((todo) => {
        return todo.id !== id;
    });
    renderTodos();
}

// Toggle completion function
function toggleCompletion(id: number) {
    // Update the todo's completed status
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed }; // Toggle completed status
        }
        return todo; // Return unmodified todo if it's not the one being toggled
    });

    renderTodos(); // Re-render the todos
}

// Render the list of todos
function renderTodos() {
    // Check if todoList exists
    if (!todoList) {
        console.error('todoList element not found');
        return;
    }

    // Clear the current list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.classList.add('todo_list--item');

        // Checkbox for marking completion
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.classList.add('todo_list--item--checkbox');
        checkbox.addEventListener('click', () => toggleCompletion(todo.id));

        // Text for the todo item
        const p = document.createElement('p');
        p.textContent = todo.todo;

        // Apply line-through if the todo is completed
        if (todo.completed) {
            p.style.textDecoration = 'line-through';
            
        } else {
            p.style.textDecoration = 'none';
        }

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('todo_list--item--delete');
        deleteButton.addEventListener('click', () => removeTodo(todo.id));

        // Append everything to the list item
        li.appendChild(checkbox);
        li.appendChild(p);
        li.appendChild(deleteButton);

        // Append the list item to the todoList
        todoList.appendChild(li);
    });
}

// Attach event listener for adding todos
todoAdd?.addEventListener('click', (e) => {
    e.preventDefault();
    if (todoInput && todoInput.value.trim() !== '') {
        addTodo(todoInput.value.trim());
        todoInput.value = '';
    }
});
