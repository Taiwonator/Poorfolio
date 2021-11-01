import React from 'react'
import styles from './Carousel.module.scss'

const Carousel = props => {
    return (
        // <div className={styles['carousel-container']}>
        //     <Item url='/flux.png'/>
        //     {/* <Item url='/certax.png'/>
        //     <Item url='/pets.png'/> */}
        // </div>
        <EmblaCarousel />
    )
}

const Item = ({ url }) => {
    return (
        <img className={styles['carousel__item']} src={url} alt="website screenshot" />
    )
}

export default Carousel

import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className={styles['embla']} ref={emblaRef}>
      <div className={styles['embla__container']}>
        <div className={styles['embla__slide']}><Item url='/flux.png'/></div>
        <div className={styles['embla__slide']}><Item url='/certax.png'/></div>
        <div className={styles['embla__slide']}><Item url='/pets.png'/></div>
      </div>
    </div>
  )
}