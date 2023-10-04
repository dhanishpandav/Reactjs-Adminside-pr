// import './App.css'
import { Route, Routes } from 'react-router'
import Electronic from './components/Electronics/Electronic'
import Header from './components/Header/Header'
// import ProductSlide from './components/Productslide/ProductSlide'
import Home from './components/Home/Home'
import View from './components/View/View'
import Add from './components/Add Product/Add'
// import Edit from './components/Edit/Edit'
import Editproduct from './components/Edit/Edit'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Add' element={<Add />}></Route>
        <Route path='/Electronic' element={<Electronic />}></Route>
        <Route path='/view' element={<View />}></Route>
        <Route path='/Edit/:id' element={<Editproduct/>}></Route>

        {/* <Route path='/view' element={<View/>}></Route> */}
      </Routes>
    </>
  )
}

export default App
