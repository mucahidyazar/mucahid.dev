import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

import {makeSelectModalType, setModalType} from '@/store/settings'
import {useTypedDispatch, useTypedSelector} from '@/store/index'

interface IModalProps {
  name: string
  children: React.ReactNode | any
}

const Modal: React.FC<IModalProps> = ({name, children, ...rest}) => {
  const dispatch = useTypedDispatch()
  const modalType = useTypedSelector(makeSelectModalType)

  const closeModalHandler = () => dispatch(setModalType(null))

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      width: '90%',
      maxHeight: '90%',
    },
    overlay: {
      backgroundColor: 'rgba(24, 17, 45, 0.72)',
    },
  }

  if (modalType === name) {
    return (
      <ReactModal
        isOpen={modalType === name}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalHandler}
        style={customStyles}
        contentLabel="Example Modal"
        {...rest}
      >
        {children}
      </ReactModal>
    )
  }

  return null
}

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Modal.defaultProps = {}

export default Modal
