import './App.css'
import Form from './components/form/form/form'
import StepsSidebar from './components/form/stepsSidebar/stepsSidebar'



function App() {

  return (
   <div className="bg-slate-100">
        <main className='flex'>
        <div className='w-6/12'>
            <StepsSidebar/>
        </div>
        <div className='w-11/12 bg-white'>
            <Form/>
        </div>
      </main>
   </div>
  )
}

export default App
