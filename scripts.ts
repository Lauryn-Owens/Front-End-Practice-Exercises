//create interface/type for todo items
interface Todo{
        id:number;
        todo:string;
        completed:boolean
};

//grab needed dom elements
const todoInput = document.querySelector('.todo_list--form--input')  as HTMLInputElement;
const todoAdd = document.querySelector('.todo_list--form--input--submit') as HTMLInputElement;
const todoList = document.querySelector('.todo_list') as HTMLUListElement ;
/**
 *const todoInput = document.querySelector('."todo_list--form--input') as HTMLInputElement | null;
//const todoAdd = document.querySelector('.todo_list--form--input--submit') as HTMLInputElement | null;
const todoList = document.querySelector('.todo_list') as HTMLUListElement | null;

 */
//create todo array -- stores todo list items
let todos:Todo[]= [];

//add todos function
function addTodo(todo:string){
   const newTodo:Todo = {
        id: Date.now(),
        todo:todo,
        completed:false
   };
   todos.push(newTodo);
    renderTodos();
}

//remove a todo function
function removeTodo(id:number){
    //update todos
    todos = todos.filter((todo) => {
        return todo.id !== id;
    })
    renderTodos();
}

//toggle completion function
function toggleCompletion(id:number){
    todos.map((todo) => {
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    });
    renderTodos();
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

//attach event listener
todoAdd?.addEventListener('click', (e) => {
    e.preventDefault();
    if(todoInput && todoInput.value.trim() !== ''){
        addTodo(todoInput.value.trim());
        todoInput.value = '';
    }
});
