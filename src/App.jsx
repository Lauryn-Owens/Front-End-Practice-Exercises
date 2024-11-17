
import './App.css'
import ProfileCard from './exerciseOne/profileCard'
import ResetCounter from './exerciseTwo/resetCounter'
import RandomTodo from './exerciseThree/randomTodo'
import ThemeToggler from './exerciseFour/themeToggler';
import UseReducerCounter from './exerciseFive/useReducerCounter';

function App() {

  return (
    <>
      <h1 className=' mt-10 text-3xl underline text-center'>React Interview Prep - I am completing practice exercises from
        the basics to intermediate level </h1>
      <main className=' w-10/12 m-auto mt-8 '>
         <h2>Exercise One</h2>
         <p>
          Day 1: Component Basics and JSX Recap
          Topics: Functional components, JSX syntax, passing props.
          Challenge Exercise: Build a "Profile Card" component that takes in props like name, age, and bio. Make it so when you click the card, the age doubles (using a state variable).
         </p>
         <div className='mt-8 flex flex-col md:flex-row gap-4'>
         <ProfileCard imgSrc= 'https://images.unsplash.com/photo-1627161683077-e34782c24d81?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzE1MTQ1NjR8&ixlib=rb-4.0.3&q=85'
         name='Sam Smith' age='30' bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '/>
         <ProfileCard imgSrc='https://images.unsplash.com/photo-1611432579699-484f7990b127?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzE1MTQ1NjR8&ixlib=rb-4.0.3&q=85'
         name='Alex Johnson' age='26'
         bio='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
         />
         </div>
         <h2 className='mt-8'>Exercise Two</h2>
         <p>
         Day 2: useState Hook and Handling Events
          Topics: useState basics, handling events like clicks and form submissions.
          Challenge Exercise: Create a “Counter with Reset” component:
          The counter increments by 1 with a button click, and when the count reaches 10, the button text changes to “Reset.”
          When clicked, “Reset” sets the count back to zero.
         </p>
         <ResetCounter/>
         <h2 className='mt-8'>Exercise Three</h2>
         <p>
         Day 3: useEffect Hook and Basic API Fetching
        Topics: useEffect for side effects, simple API calls.
        Challenge Exercise: Build a “Random Todo Generator” component that:
        Fetches a random todo from an API every time you click a button.
        Shows “Loading…” while fetching.
         </p>
         <RandomTodo/>

         <h2>Exercise Four</h2>
         <p>
         Day 4: Context API and Prop Drilling Solution
        Topics: Context API, solving prop drilling with context.
        Challenge Exercise: Make a “Theme Toggle” application:
        Set up a context for light/dark themes.
        Toggle the theme from a button in one component, but apply the theme colors across multiple nested components.
                </p>
         <ThemeToggler/>
         <p className='mt-8'>Last Exercise on this particular web applications -- going to do practice exercises individually now</p>
          <h2>Exercise Five</h2>
          <p>
          Day 5: Counter with useReducer
          Topics: State transitions, actions, and useReducer.
          Challenge Exercise: Build a counter that increments, decrements, resets, and supports custom step values.
          </p>
          <UseReducerCounter/>
          
      </main>
    </>
  )
}

export default App
