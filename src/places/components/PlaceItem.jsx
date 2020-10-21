import React, {useContext, useState} from 'react'

import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import Map from '../../shared/components/UIElements/Map'
import './PlaceItem.css'
import {AuthContext} from '../../shared/context/AuthContext'

function PlaceItem(props) {
  const [showMap, setShowMap] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const {isLoggedIn} = useContext(AuthContext)

  const openMapHandler = () => setShowMap(true)
  const closeMapHandler = () => setShowMap(false)

  const openDeleteModal = () => setShowDeleteModal(true)
  const closeDeleteModal = () => setShowDeleteModal(false)

  const handleDelete = () => {
    setShowDeleteModal(false)
    console.log('DELETE.....')
  }

  // {id: "p1", title: "Empire State Building", description: "One of the most famous sky scrapers in the world!", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thu…_Building.jpg/640px-NYC_Empire_State_Building.jpg", address: "20 W 34th St, New York, NY 10001", …}
  const {imageUrl, title, address, description, id, location} = props

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className='map-container'>
          <Map center={location} zoom={16} />
        </div>
      </Modal>

      <Modal
        header='Are you sure?'
        show={showDeleteModal}
        onCancel={closeDeleteModal}
        footerClass='place-item__modal-actions'
        footer={
          <React.Fragment>
            <Button inverse onClick={closeDeleteModal}>
              CANCEL
            </Button>
            <Button danger onClick={handleDelete}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you went to proceed and delete this place? Place note that is can be restore after
          that.
        </p>
      </Modal>

      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={imageUrl} alt={title} />
          </div>
          <div className='place-item__info'>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {isLoggedIn && <Button to={`/places/${id}`}>EDIT</Button>}
            {isLoggedIn && (
              <Button danger onClick={openDeleteModal}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  )
}

export default PlaceItem
