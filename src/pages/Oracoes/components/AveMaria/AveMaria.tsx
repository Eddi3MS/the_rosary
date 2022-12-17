import React from 'react'
import { Box } from '@ems-ignite/react'
import Oracao from '../Oracao'

const aveMaria = {
  lt: [
    'Ave Maria, gratia plena,',

    'Dóminus tecum.',

    'Benedícta tu in muliéribus,',

    'et benedíctus fructus ventris tui, Iesus.',

    'Sancta Maria, Mater Dei,',

    'ora pro nobis peccatóribus,',

    'nunc, et in hora mortis nostræ.',

    'Amen.',
  ],
  pt: [
    'Ave Maria, cheia de graça,',

    'o Senhor é convosco.',

    'Bendita és tu entre as mulheres,',

    'e bendito é o fruto do vosso ventre, Jesus.',

    'Santa Maria, Mãe de Deus,',

    'rogái por nós pecadores,',

    'agora, e na hora de nossa morte.',

    'Amém.',
  ],
}

const AveMaria = () => {
  return (
    <Box className='flex' css={{ border: 'none', paddingInline: 0 }}>
      {Object.entries(aveMaria).map(([lang, prayer]) => (
        <Box key={lang}>
          <Oracao prayer={prayer} isLatim={lang === 'lt'} />
        </Box>
      ))}
    </Box>
  )
}

export default AveMaria
