import { useContext, useState, useEffect, } from 'react'
import { IoLinkOutline, IoClose } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import MainContext from '../context/MainContext';
import { useNavigate } from 'react-router-dom';



const HeaderActions = () => {

  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)
  const [downloadTarget, setDownloadTarget] = useState('css')
  const [downloadURL, setDownloadURL] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = '';

      switch (downloadTarget) {
        case 'css':
          output += ':root {\n'
          selectedBrands.map(slug => {
            let brand = brands.find(b => b.slug === slug)
            brand.colors.map((color, key) => {
              output += `--${slug}-${key}: #${color};\n`
            })
          })
          output += '}'
          break;


        case 'scss':
          selectedBrands.map(slug => {
            let brand = brands.find(b => b.slug === slug)
            brand.colors.map((color, key) => {
              output += `\$${slug}-${key}: #${color};\n`
            })
          })
          break;


        case 'less':
          selectedBrands.map(slug => {
            let brand = brands.find(b => b.slug === slug)
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}: #${color};\n`
            })
          })
          break;
      }


      const blob = new Blob([output])
      const url = URL.createObjectURL(blob)
      setDownloadURL(url)
      return () => {
        URL.revokeObjectURL(url)
        setDownloadURL('')
      }
    }
  }, [selectedBrands, downloadTarget])


  return (
    <div className='header-actions-wrapper'>
      <div className="actions">
        <a download={`brands.${downloadTarget}`} href={downloadURL} onClick={e => {
          if(selectedBrands.length === 0) e.preventDefault()
        }}>
          <MdDownload />
        </a>
        <select
          defaultValue={downloadTarget}
          onChange={e => setDownloadTarget(e.target.value)}
        >
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <button onClick={() => {
          if (selectedBrands.length > 0) {
            const endpoint = `/collection/${selectedBrands.join(',')}`
           prompt('Here is your  URL', `http://localhost:5173${endpoint}`)
            navigate(endpoint)
          }
        }}>
          <IoLinkOutline />
        </button>
        <button onClick={() => setSelectedBrands([])}>
          <IoClose />
        </button>
      </div>
      <span className='selected-brands-count'>
        {selectedBrands.length} brands collected
      </span>
      |

      <span className='all-brands'>
        <button>
          <MdDownload />

        </button>
        All Brands
      </span>
    </div>
  )
}

export default HeaderActions