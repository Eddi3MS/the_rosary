import React from 'react'
import { Box } from '@ems-ignite/react'
import Oracao from '../Oracao'

const paterNoster = {
  lt: [
    'Pater noster,',

    'qui es in cælis',

    'sanctificetur nomen tuum',

    'adveniat regnum tuum',

    'fiat voluntas tua,',

    'sicut in cælo et in terra.',

    'Panem nostrum quotidianum da nobis hodie,',

    'et dimitte nobis debita nostra,',

    'sicut et nos dimittimus debitoribus nostris',

    'et ne nos inducas in tentationem',

    'sed libera nos a malo. Amen.',
  ],
  pt: [
    'Pai nosso,',

    'que estais nos Céus,',

    'santificado seja o Vosso Nome',

    'venha a nós o Vosso Reino,',

    'seja feita a Vossa vontade',

    'assim na terra como no Céu.',

    'O pão nosso de cada dia nos dai hoje',

    'perdoai-nos as nossas ofensas',

    'assim como nós perdoamos a quem nos tem ofendido',

    'e não nos deixeis cair em tentação,',

    'mas livrai-nos do mal. Amem',
  ],
}

const PaterNoster = () => {
  return (
    <Box className='flex' css={{ border: 'none', paddingInline: 0 }}>
      {Object.entries(paterNoster).map(([lang, prayer]) => (
        <Box key={lang}>
          <Oracao prayer={prayer} isLatim={lang === 'lt'} />
        </Box>
      ))}
    </Box>
  )
}

export default PaterNoster
