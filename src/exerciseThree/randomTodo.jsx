import React, {useState, useEffect} from 'react'
import axios from 'axios'

function RandomTodo() {
    //set state to hold the todo, loading state and error state
    const[todo, setTodo] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);

    //returns random number between 0 and 30
    const randomNumber = () => {
        return Math.floor(Math.random() * 30);
    }
    /**
     * fetch random todo json data from api using the random number generated 
     * from the randomNumber()
     */
    const fetchTodo = (randomNumber) => {
        //reset loading state at the start of each fetch
        setLoading(true);
        //reset error
        setError(false);
        axios.get(`https://dummyjson.com/todos/${randomNumber}`).then(response => {
            setTodo(response.data);
            setLoading(false);
       }).catch(error => {
            //if fetch not successful set error and loading is set to false
           setError(error.message);
           setLoading(false)
       })
    };
    //load todo on initial render
    useEffect(() => {
       fetchTodo(randomNumber()); 
    },[]);
    
    /**
     *  Day 3: useEffect Hook and Basic API Fetching
        Topics: useEffect for side effects, simple API calls.
        Challenge Exercise: Build a “Random Todo Generator” component that:
        Fetches a random todo from an API every time you click a button.
        Shows “Loading…” while fetching.
     */
  return (
    <main className='mt-4'>
        <h2 className='font-bold text-purple-400'>Random Todo Generator</h2>
        <div className=' mt-4 border-2 border-blue-900 rounded-sm w-10/12 h-min text-center p-4'>
                {loading === true ? 'Loading'  : todo.todo}
        </div>
        <button 
        onClick={() => {
            fetchTodo(randomNumber());
        }}
        className='block m-auto mt-4 bg-green-300 text-white hover:bg-green-900
        py-4 px-4 rounded-lg'>Generate New Quote</button>
    </main>
  )
}

export default RandomTodo