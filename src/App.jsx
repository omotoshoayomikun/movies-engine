import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Btn } from './components/Forms/Btn'
import Question1 from './components/Questions/Question1'
import Question2 from './components/Questions/Question2'
import Question3 from './components/Questions/Question3'
import Question4 from './components/Questions/Question4'
import Question5 from './components/Questions/Question5'
import Question6 from './components/Questions/Question6'
import Details from './components/Questions/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="body_container">
        <div className='header_container'>
          <div className='header_text'>MOVIE RECOMMENDATION <br /> ENGINE</div>
          <p className='header_paragraph'>
            You can’t decide between thousands of movies available for streaming?
            Answer 6 questions and let us do the work!
          </p>
          <div className="mt-5 w-[164px]">
            <Btn text='Start Now' />
          </div>
        </div>
        {/* <Question1 /> */}
        {/* <Question2 /> */}
        {/* <Question3 /> */}
        {/* <Question4 /> */}
        {/* <Question5 />  */}
        {/* <Question6 /> */}
        <Details />
      </div>
    </>
  )
}

export default App
