
import './App.css'
import ProfileCard from './exerciseOne/profileCard'
import ResetCounter from './exerciseTwo/resetCounter'

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
      </main>
    </>
  )
}

export default App
