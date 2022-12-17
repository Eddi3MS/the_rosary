import React from 'react'
import useSize from '../../../../hooks/useSize'

import styles from './Slide.module.css'

interface ISlideProps {
  data: {
    title: string
    mysterium: {
      id: string
      title: string
      image: string
    }[]
  }
}

const Slide = ({ data }: ISlideProps) => {
  const [active, setActive] = React.useState(0)
  const [position, setPosition] = React.useState(0)
  const contentRef: any = React.useRef()
  const { width } = useSize(contentRef)

  const { title, mysterium } = data

  React.useEffect(() => {
    setPosition(-(width * active))
  }, [active, width])

  function slidePrev() {
    setActive(active - 1)
  }

  function slideNext() {
    setActive(active + 1)
  }

  return (
    <section className='container'>
      <h1 className={styles.title}>{title}</h1>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {mysterium.map((m) => (
          <div key={m.id} className={styles.item}>
            <h2 className={styles.mysterium}>{m.title}</h2>
            <img src={m.image} alt={m.title} className={styles.image} />
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        {active > 0 && (
          <button
            onClick={slidePrev}
            className={`${styles.previous} ${styles.button}`}
          >
            Anterior
          </button>
        )}
        {active < mysterium.length - 1 && (
          <button
            onClick={slideNext}
            className={`${styles.next} ${styles.button} `}
          >
            Próximo
          </button>
        )}
      </nav>
    </section>
  )
}

export default Slide
