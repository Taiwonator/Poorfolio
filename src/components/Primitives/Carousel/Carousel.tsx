import React, { useState, useEffect } from 'react'
import styles from './Carousel.module.scss'
import classNames from 'classnames'
import useEmblaCarousel from 'embla-carousel-react'
import useAnimationFrame from 'src/hooks/useAnimationFrame'

const urlMap = {
    '/flux.png': '/flux--full.png',
    '/certax.png': '/certax--full.png', 
    '/pets.png': '/pets--full.png', 
}

const Carousel = props => {
    const [modalVisible, setModalVisibility] = useState(false)
    const [modalUrl, setModalUrl] = useState('/flux--full.png')
    
    const openModal = (url) => {
        setModalUrl(url)
        setModalVisibility(true)
    }

    const closeModal = () => {
        setModalVisibility(false)
    }
    
    return (
        <>
            <EmblaCarousel openModal={openModal} />
            <Modal closeModal={closeModal} isVisible={modalVisible} url={modalUrl} />
        </>
    )
}

const Item = ({ url, openModal }) => {
    const onMouseUp = () => {
        openModal(urlMap[url])
    }

    const className = classNames(styles['carousel__item'])

    return (
        <img
            onMouseUp={() => onMouseUp()}
            className={className}
            src={url} alt="website screenshot"
        />
    )
}

const Modal = ({ closeModal, isVisible, url }) => {
    const className = classNames(
        styles['modal'], 
        !isVisible && styles['modal--hidden']
    )

    return (
        <div className={className}>
            <img
                className={styles['modal__img']}
                alt="full website screenshot"
                src={url}
            />
            <div className={styles['modal__background']} onClick={() => closeModal()}/>
        </div>
    )
}

interface EmblaCarouselProps {
    openModal: (url) => void
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ openModal }) => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className={styles['embla']} ref={emblaRef}>
      <div className={styles['embla__container']}>
        <div className={styles['embla__slide']}><Item openModal={openModal} url='/flux.png'/></div>
        <div className={styles['embla__slide']}><Item openModal={openModal} url='/certax.png'/></div>
        <div className={styles['embla__slide']}><Item openModal={openModal} url='/pets.png'/></div>
      </div>
    </div>
  )
}

export default Carousel
