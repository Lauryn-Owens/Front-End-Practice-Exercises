import { useReducer, useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Create the context
const TodoContext = createContext();

// Initial state for todos
const initialTodos = [];

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'Add': {
            const { todo } = action.payload;
            if (todo.trim().length > 0) {
                return [
                    ...state,
                    {
                        todo,
                        id: uuidv4(),
                        completed: false,
                    },
                ];
            }
            return state; // If input is empty, return the current state
        }
        default:
            return state;
    }
};

// Context provider component
const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState(''); // State for the input
    const [state, dispatch] = useReducer(reducer, initialTodos); // Reducer for the todo list

    // Handle input change
    const handleInputChange = (e) => {
        setTodo(e.target.value); // Update the input state
    };

    // Add a new todo
    const addTodo = () => {
        if (todo.trim().length > 0) {
            dispatch({ type: 'Add', payload: { todo } });
            setTodo(''); // Clear the input after dispatching
        }
    };

    return (
        <TodoContext.Provider value={{ state, dispatch, todo, handleInputChange, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoProvider, TodoContext };
