import React from 'react'
import { Box } from '@ems-ignite/react'
import Oracao from '../Oracao'

const gloria = {
  lt: [
    'Gloria Patri,',

    'et Fílio,',

    'et Spíritui Sáncto.',

    'Sicut erat in princípio,',

    'et nunc et semper,',

    'et in sǽcula sæculórum.',

    'Amen.',
  ],
  pt: [
    'Gloria ao Pai,',

    'ao Filho,',

    'e ao Espirito Santo.',

    'Assim como era no principio,',

    'agora e para sempre,',

    'e pelos séculos dos séculos.',

    'Amém.',
  ],
}

const Gloria = () => {
  return (
    <Box className='flex' css={{ border: 'none', paddingInline: 0 }}>
      {Object.entries(gloria).map(([lang, prayer]) => (
        <Box key={lang}>
          <Oracao prayer={prayer} isLatim={lang === 'lt'} />
        </Box>
      ))}
    </Box>
  )
}

export default Gloria
