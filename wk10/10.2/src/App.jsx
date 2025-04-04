import {Routes, Route} from 'react-router-dom'
import {Home} from './views/home'
import {Song} from './views/song'
import './App.css'
import musicData from './assets/music-list.json'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path=":slug" element={<Song data={musicData} />}></Route>
    </Routes>
    </>
  )
}

export default App
