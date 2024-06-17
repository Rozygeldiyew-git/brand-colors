import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import MainContext from "../context/MainContext"
import HeaderActions from "./HeaderActions"
import LazyLoad from "react-lazyload"
import Brand from "./Brand"
import { Link } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import ContentLoader from './ContentLoader'
import { useNavigate } from "react-router-dom"


const Collection = () => {

  const { slugs } = useParams()
  const navigate = useNavigate()
  const { selectedBrands, search, brands,  setSelectedBrands } = useContext(MainContext)


  useEffect(() => {
    setSelectedBrands(slugs.split(','))
  }, [])

  useEffect(() => {
    if(selectedBrands.length === 0){
      navigate('/')
    }
  }, [selectedBrands])

  return (
    <main className='content'>
      <header>
        <div className="go-back">
          <IoIosArrowRoundBack />
          <Link to={'/'}>
            All brands
          </Link>
        </div>
        <HeaderActions />
      </header>

      <section className="brands">
        {
          selectedBrands.length > 0 ? selectedBrands.map((slug, idx) => {
            const brand = brands.find(b => b.slug === slug)
            return (
              <LazyLoad key={idx} placeholder={<ContentLoader />} overflow={true}  >
                <Brand brand={brand} />
              </LazyLoad>
            )
          }) : (
            <div className='no-one-brand'>
              Not found any brand with <b>"{search}"</b> this brand name
            </div>
          )
        }
      </section>
    </main>
  )
}

export default Collection