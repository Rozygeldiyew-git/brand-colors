import { useContext } from "react"
import { getContrastYIQ } from "../helpers"
import MainContext from "../context/MainContext"
import ClipboardButton from "react-clipboard.js"
import toast from "react-hot-toast"

const Brand = ({ brand }) => {


  const { selectedBrands, setSelectedBrands } = useContext(MainContext)

  const toggleSelectedBrands = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands([...selectedBrands.filter(b => b !== brand.slug)])
    } else {
      setSelectedBrands([...selectedBrands, brand.slug])
    }
  }


  return (
    <div
      className={`brand  ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}
      
    >
      <h5 onClick={toggleSelectedBrands}>
        {brand.title}
      </h5>
      <div className="brand-colors">
        {
          brand.colors.map((color, idx) => (
            <ClipboardButton
              data-clipboard-text={`#${color}`}
              key={idx}
              onSuccess={() => toast.success(`Copied #${color} to clipboard`)}
              component="span"
              style={{ '--bgColor': `#${color}`, '--textColor': getContrastYIQ(color) }}
            >
              {color}
            </ClipboardButton>
          ))
        }
      </div>
    </div>
  )
}

export default Brand