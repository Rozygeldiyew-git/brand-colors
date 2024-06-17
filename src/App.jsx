import {useState} from 'react'
import MainContext from './context/MainContext'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import brandsJson from './assets/json/brands.json'
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Collection from './components/Collection'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Content />
  },
  {
    path: '/collection/:slugs',
    element: <Collection />
  }
])


const App = () => {

  const brandsArray = []
  Object.keys(brandsJson).forEach((brandKey) => {
      brandsArray.push(brandsJson[brandKey])
  })
  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [search, setSearch] = useState('')

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    search, 
    setSearch
  }
  

  useEffect(() => {
    const filteredBrands = brandsArray.filter((brand) => brand.title.toLowerCase().includes(search.toLowerCase()))
    setBrands(filteredBrands)
  }, [search])
  


  return (
    <div className='main-wrapper'>
      <MainContext.Provider value={data}>
        <Sidebar />
        <RouterProvider router={router} />
      </MainContext.Provider>
      <Toaster
        position='right-bottom'
        reverseOrder={false}
      />
    </div>
  )
}

export default App