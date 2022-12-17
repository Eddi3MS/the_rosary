import React from 'react'
import { Box } from '@ems-ignite/react'
import Oracao from '../Oracao'

const anjoDeFatima = {
  lt: [
    'O mi Iesu,',
    'dimitte nobis debita nostra,',
    'libera nos ab igne inferni,',
    'conduc in cælum omnes animas,',
    'præsertim illas quæ maxime',
    'indigent misericordia tua.',
  ],
  pt: [
    'Oh meu Jesus,',
    'perdoai-nos as nossas dividas,',
    'livrai-nos do inferno.',
    'Levai as almas todas para o céu.',
    'E socorrei principalmente as que mais',
    'precisarem da vossa infinita misericórdia.',
  ],
}

const Anjo = () => {
  return (
    <Box className='flex' css={{ border: 'none', paddingInline: 0 }}>
      {Object.entries(anjoDeFatima).map(([lang, prayer]) => (
        <Box key={lang}>
          <Oracao prayer={prayer} isLatim={lang === 'lt'} />
        </Box>
      ))}
    </Box>
  )
}

export default Anjo
