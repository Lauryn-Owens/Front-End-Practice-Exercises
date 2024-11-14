import React, {useState} from 'react'

function ResetCounter() {
    const[count, setCount] = useState(0);
    const[reset, setReset] = useState(false);
    
    /**
     * Challenge Exercise: Create a “Counter with Reset” component:
          The counter increments by 1 with a button click, and when the count reaches 10, the button text changes to “Reset.”
          When clicked, “Reset” sets the count back to zero.
     */
    /**
     * this function increments count by one
     * only if count is less than 10 if not it sets reset to true
     * 
     */
   const onClickIncrementHandler = () => {
            if(count < 10){
                setCount(count => count + 1);
            }
            else{
                setReset(true);
            }
           return; 
   };
   /**
    * this function resets count to 0 and updates result to false again
    */
   const onClickResetCounterHandler = () => {
        setCount(0);
        setReset(false);
   }
  return (
    <main className='mt-4 flex flex-col gap-4'>
        <h1 className='text-green-800 font-xl font-bold'>Counter with Reset</h1>
        <p className=''>Count: {count}</p>
        <button className='py-2 px-4 bg-blue-500 text-white font-bold rounded-md' 
        onClick={() => {
            /**
             * if reset is set to false allow the incrementation
             * if not do not and reset incrementation
             */
            if(reset === false){
                onClickIncrementHandler();
            }
            if(reset === true){
                onClickResetCounterHandler();
            }
        }}>
            {reset === true ? 'Reset' : 'Plus One'}
        </button>
    </main>
  )
}

export default ResetCounter