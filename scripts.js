var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
// Grab needed DOM elements
var todoInput = document.querySelector('.todo_list--form--input');
var todoAdd = document.querySelector('.todo_list--form--input--submit');
var todoList = document.querySelector('.todo_list');
// Create todo array -- stores todo list items
var todos = [];
// Add todos function
function addTodo(todo) {
    var newTodo = {
        id: Date.now(),
        todo: todo,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}
// Remove a todo function
function removeTodo(id) {
    // Update todos
    todos = todos.filter(function (todo) {
        return todo.id !== id;
    });
    renderTodos();
}
// Toggle completion function
function toggleCompletion(id) {
    // Update the todo's completed status
    todos = todos.map(function (todo) {
        if (todo.id === id) {
            return __assign(__assign({}, todo), { completed: !todo.completed }); // Toggle completed status
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
    todos.forEach(function (todo) {
        var li = document.createElement('li');
        li.classList.add('todo_list--item');
        // Checkbox for marking completion
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.classList.add('todo_list--item--checkbox');
        checkbox.addEventListener('click', function () { return toggleCompletion(todo.id); });
        // Text for the todo item
        var p = document.createElement('p');
        p.textContent = todo.todo;
        // Apply line-through if the todo is completed
        if (todo.completed) {
            p.style.textDecoration = 'line-through';
        }
        else {
            p.style.textDecoration = 'none';
        }
        // Delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('todo_list--item--delete');
        deleteButton.addEventListener('click', function () { return removeTodo(todo.id); });
        // Append everything to the list item
        li.appendChild(checkbox);
        li.appendChild(p);
        li.appendChild(deleteButton);
        // Append the list item to the todoList
        todoList.appendChild(li);
    });
}
// Attach event listener for adding todos
todoAdd === null || todoAdd === void 0 ? void 0 : todoAdd.addEventListener('click', function (e) {
    e.preventDefault();
    if (todoInput && todoInput.value.trim() !== '') {
        addTodo(todoInput.value.trim());
        todoInput.value = '';
    }
});
