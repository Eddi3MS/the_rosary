import React from 'react'
import { Box, Heading, Text } from '@ems-ignite/react'
import Oracao from '../Oracao'

const salveRegina = {
  lt: [
    'Salve, Regína,',

    'Mater misericórdæ,',

    'vita, dulcédo,',

    'et spes nostra, salve.',

    'Ad te clamámus,',

    'éxsules fílii Hevæ,',

    'Ad te suspirámus,',

    'geméntes et flentes,',

    'in hac lacrimárum valle.',

    'Eia, ergo, advocáta nostra,',

    'illos tuos misericórdes óculos ad nos convérte.',

    'Et Iesum, benedíctum fructum ventris tui,',

    'nobis post hoc exílium osténde.',

    'O clemens, O pia, O dulcis Virgo Maria.',

    'Ora pro nobis sancta Dei Génetrix.',

    'Ut digni efficiámur promissiónibus Christi.',

    'Amen.',
  ],
  pt: [
    'Salve, Rainha,',

    'Mãe de misericórdia,',

    'vida, doçura,',

    'esperança nossa, salve.',

    'A vós bradamos,',

    'os degredados filhos de Eva,',

    'A vós suspiramos,',

    'gemendo e chorando,',

    'neste vale de lágrimas.',

    'Eia, pois, advogada nossa,',

    'esses vossos olhos misericordiosos a nós volvei.',

    'E depois deste desterro, mostrai-nos Jesus.',

    'bendito fruto do vosso ventre.',

    'O clemente, O piedosa, O doce sempre Virgem Maria.',

    'Rogai por nós santa Mãe de Deus.',

    'para que sejamos dignos das promessas de Cristo.',

    'Amém.',
  ],
}

const SalveRainha = () => {
  return (
    <Box className='flex' css={{ border: 'none', paddingInline: 0 }}>
      {Object.entries(salveRegina).map(([lang, prayer]) => (
        <Box key={lang}>
          <Oracao prayer={prayer} isLatim={lang === 'lt'} />
        </Box>
      ))}
    </Box>
  )
}

export default SalveRainha
