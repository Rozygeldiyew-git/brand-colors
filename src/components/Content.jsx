import { useContext } from 'react'
import Search from './Search'
import Brand from './Brand'
import MainContext from '../context/MainContext'
import LazyLoad from 'react-lazyload'
import HeaderActions from './HeaderActions'
import ContentLoaderComponent from './ContentLoader'



const Content = () => {


  const { brands, search } = useContext(MainContext)
  


  return (
    <main className='content'>
      <header>
        <Search />
        <HeaderActions />
      </header>

      <section className="brands">
        {
         brands.length > 0 ? brands.map((brand, idx) => (
            <LazyLoad key={idx} placeholder={<ContentLoaderComponent />} overflow={true}  >
              <Brand brand={brand}  />
            </LazyLoad>
          )) : (
            <div className='no-one-brand'>
              Not found any brand with <b>"{search}"</b> this brand name
            </div>
          )
        }
      </section>
    </main>
  )
}

export default Content