import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Btn } from './components/Forms/Btn'
import Question1 from './components/Questions/Question1'
import Question2 from './components/Questions/Question2'
import MovieGenre from './components/Questions/MovieGenre'
import Question4 from './components/Questions/Question4'
import Question5 from './components/Questions/Question5'
import Question6 from './components/Questions/Question6'
import Details from './components/Questions/Details'
import View from './components/Questions/View'
import { moviesFetch } from './utilis/actions'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/movieSlice'

function App() {
  const [index, setIndex] = useState(0)
const dispatch = useDispatch()
  
  useEffect(() => {
   dispatch(fetchMovies())
  }, [dispatch])

  return (
    <>
      <div className="body_container">
        <div className='header_container'>
          <div className='header_text'>MOVIE RECOMMENDATION ENGINE</div>
          <p className='header_paragraph'>
            You can’t decide between thousands of movies available for streaming?
            Answer 2 questions and let us do the work!
          </p>
          <div className="mt-5 w-[164px]">
            <Btn text='Start Now' onClick={() => setIndex(index => index + 1)} />
          </div>
        </div>
        {
          index === 1 && <Question1 setIndex={setIndex} />
        }

        {
          index === 2 && <MovieGenre setIndex={setIndex} />
        }

        {
          index === 3 && <Details setIndex={setIndex} />
        }
{/* 
        {
          index === 4 && <View />
        } */}

      </div>
    </>
  )
}

export default App
