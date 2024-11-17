import { useReducer } from "react";
import React from "react";

function UseReducerCounter() {
  // Initial state for the counter and step
  const initialState = { count: 0, step: 2 };

  // Reducer function to handle state transitions based on action types
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        // Increment the count by the step value
        return { ...state, count: state.count + state.step };
      }
      case "decrement": {
        // Decrement the count by the step value, but prevent it from going below 0
        if (state.count === 0) {
          return state; // Return the current state if count is already 0
        }
        return { ...state, count: state.count - state.step };
      }
      case "reset": {
        // Reset the count to 0 while keeping the step value unchanged
        return { ...state, count: 0 };
      }
      case "customSteps": {
        // Update the step value with the payload provided in the action
        return { ...state, step: action.payload };
      }
      default: {
        // Return the current state for any unrecognized action
        return state;
      }
    }
  };

  // Use the useReducer hook to manage state and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <h1>useReducerCounter Counter Practice</h1>
      {/* Display the current count */}
      <p>Count: {state.count}</p>

      {/* Buttons and input for interacting with the counter */}
      <div className="flex gap-4">
        {/* Increment Button */}
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
          className="bg-red-900"
        >
          +
        </button>

        {/* Decrement Button */}
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
          className="bg-red-400"
        >
          -
        </button>

        {/* Reset Button */}
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
          className="bg-red-200"
        >
          Reset
        </button>

        {/* Input for setting a custom step value */}
        <input
          className="border-2 border-red-700"
          type="number"
          onChange={(e) => {
            // Parse the input value to an integer or default to 1 if input is invalid
            const newStep = parseInt(e.target.value, 10) || 1;
            // Dispatch an action to update the step value
            dispatch({ type: "customSteps", payload: newStep });
          }}
        />
      </div>
    </main>
  );
}

export default UseReducerCounter;
