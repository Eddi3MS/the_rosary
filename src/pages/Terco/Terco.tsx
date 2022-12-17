import React, { useState } from 'react'
import styles from './Terco.module.css'
import { Slide } from './components'
import { misterios, mysterium } from '../../data'

function getMysterium(day: number) {
  if (day === 0 || day === 3) return 'mysteria_gloriae'
  if (day === 1 || day === 6) return 'mysteria_gaudii'
  if (day === 2 || day === 5) return 'mysteria_doloris'

  return 'mysteria_lucis'
}

function getWeekDay() {
  let weekDayCapitalized = new Date()
    .toLocaleDateString('pt-BR', { weekday: 'long' })
    .split('')
    .map((l, i) => (i === 0 ? l.toUpperCase() : l))
    .join('')

  if (weekDayCapitalized.includes('-')) {
    weekDayCapitalized = weekDayCapitalized
      .split('-')
      .map((l, i) =>
        i === 1
          ? l
              .split('')
              .map((l, i) => (i === 0 ? l.toUpperCase() : l))
              .join('')
          : l
      )
      .join('-')
  }

  return weekDayCapitalized
}

const day = new Date().getDay()

const Terco = () => {
  const [language, setLanguage] = useState('pt')

  return (
    <div className={styles.p_terco_wrapper}>
      <button
        onClick={() => setLanguage('pt')}
        className={`${styles.button} ${language === 'pt' && styles.active}`}
      >
        Português
      </button>
      <button
        onClick={() => setLanguage('lt')}
        className={`${styles.button} ${language === 'lt' && styles.active}`}
      >
        Latim
      </button>
      <Slide
        data={
          language === 'pt'
            ? misterios[getMysterium(day) as keyof typeof misterios]
            : mysterium[getMysterium(day) as keyof typeof mysterium]
        }
      />

      <button className={`${styles.button} ${styles.date}`}>
        {`${getWeekDay()} - ${new Date().toLocaleDateString('pt-BR')}`}
      </button>
    </div>
  )
}

export default Terco
