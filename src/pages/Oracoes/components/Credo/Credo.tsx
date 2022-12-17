import React from 'react'
import { Box } from '@ems-ignite/react'
import Oracao from '../Oracao'

const credo = {
  lt: [
    'Credo in Deum Patrem omnipoténtem,',

    'Creatórem cæli et terræ.',

    'Et in Iesum Christum,',

    'Fílium eius únicum,',

    'Dóminum nostrum,',

    'qui concéptus est de Spíritu Sancto,',

    'natus ex María Vírgine,',

    'passus sub Póntio Piláto,',

    'crucifíxus, mórtuus, et sepúltus,',

    'descéndit ad ínferos,',

    'tértia die resurréxit a mórtuis,',

    'ascéndit ad cælos,',

    'sedet ad déxteram Dei Patris omnipoténtis,',

    'inde ventúrus est iudicáre vivos et mórtuos.',

    'Credo in Spíritum Sanctum,',

    'sanctam Ecclésiam cathólicam,',

    'sanctórum communiónem,',

    'remissiónem peccatórum,',

    'carnis resurrectiónem,',

    'vitam ætérnam. Amen.',
  ],
  pt: [
    'Creio em Deus Pai Todo-Poderoso,',

    'Criador do Céu e da Terra.',

    'E em Jesus Cristo,',

    'Seu único Filho,',

    'Nosso Senhor;',

    'Que foi concebido pelo poder do Espírito Santo.',

    'Nasceu da Virgem Maria,',

    'padeceu sob Pôncio Pilatos,',

    'foi crucificado, morto, sepultado,',

    'desceu a mansão dos mortos.',

    'Ressuscitou no terceiro dia,',

    'Subiu ao Céu,',

    'está sentado à direita de Deus Pai Todo-Poderoso,',

    'de onde há de vir julgar os vivos e os mortos.',

    'Creio no Espírito Santo,',

    'na Santa Igreja Católica,',

    'na Comunhão dos Santos,',

    'na remissão dos pecados,',

    'na ressurreição da carne,',

    'na vida eterna. Amem.',
  ],
}

const Credo = () => {
  return (
    <Box className='flex' css={{ border: 'none', paddingInline: 0 }}>
      {Object.entries(credo).map(([lang, prayer]) => (
        <Box key={lang}>
          <Oracao prayer={prayer} isLatim={lang === 'lt'} />
        </Box>
      ))}
    </Box>
  )
}

export default Credo
