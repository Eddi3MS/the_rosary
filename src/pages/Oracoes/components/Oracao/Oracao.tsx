import { Heading, Text } from '@ems-ignite/react'
import React from 'react'

interface OracaoProps {
  prayer: string[]
  isLatim?: boolean
}

const Oracao = ({ prayer, isLatim }: OracaoProps) => {
  return (
    <>
      <Heading as='h2' size='md' css={{ marginBottom: '1rem' }}>
        {isLatim ? 'Latim:' : 'Português:'}
      </Heading>
      {prayer.map((p, i) => (
        <Text as='p' size='sm' key={i}>
          {p}
        </Text>
      ))}
    </>
  )
}

export default Oracao
