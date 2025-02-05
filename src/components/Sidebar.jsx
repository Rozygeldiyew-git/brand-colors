import { useState } from 'react'
import ReactLogo from '../assets/icons/logo.svg'
import Modal from 'react-modal'
import { GrClose } from 'react-icons/gr'

const Sidebar = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen)
  }


  return (
    <aside className="sidebar">
      <div className="logo-wrapper">
        <img src={ReactLogo} alt="Logo" />
        <a href="/" >
          Brand<span>Colors</span>
        </a>
      </div>

      <div className="sidebar-content">
        <p>
          The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
        </p>

        <div className="links">
          <a>Suggest Brand</a>
          <a onClick={toggleModalIsOpen}>About BrandColors</a>
        </div>


        <div className="sidebar-footer">
          <h4>Brand <span>Colors</span> + DesignBombs</h4>

          <p>
            Learn how to make a website - we have put together an in-depth guide that will help you build your first website with WordPress.
          </p>
        </div>

      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModalIsOpen}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className='close-btn' onClick={toggleModalIsOpen}>
          <GrClose />
        </button>

        <h3>About BrandColors</h3>

        <p>
        BrandColors was created by <b>DesignBombs</b>. The goal was to create a helpful reference for the brand color codes that are needed most often.
        </p>

        <p>
        It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <b>2 million pageviews</b>. There are now over <b>600 brands</b> with <b>1600 colors</b> and the collection is always growing.
        </p>
      </Modal>
    </aside>
  )
}

export default Sidebar