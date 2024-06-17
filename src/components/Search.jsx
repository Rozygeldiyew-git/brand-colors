import { useContext } from 'react'
import { GrSearch } from 'react-icons/gr'
import MainContext from '../context/MainContext'

const Search = () => {

  const { setSearch } = useContext(MainContext)


  return (
    <div className='search-field'>
      <GrSearch className='search-icon' />
      <input type="search" placeholder='Search Brands' onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Search