import { Heading, Text } from '@ems-ignite/react'
import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.p_home_wrapper}>
      <Heading as='h1' size='2xl'>
        As the family goes, so goes the nation and so goes the whole world in
        which we live.
      </Heading>
      <Text as='p' size='md'>
        Pope John Paul II
      </Text>
    </div>
  )
}

export default Home
