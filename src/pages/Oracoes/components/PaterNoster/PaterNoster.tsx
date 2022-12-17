import React from 'react'
import { Box, Heading, Text } from '@ems-ignite/react'

const PaterNoster = () => {
  return (
    <Box className='flex' css={{ border: 'none', paddingInline: 0 }}>
      <Box>
        <Heading as='h2' size='md' css={{ marginBottom: '1rem' }}>
          Latim:
        </Heading>
        <Text as='p' size='sm'>
          Pater noster,
        </Text>
        <Text as='p' size='sm'>
          qui es in cælis
        </Text>
        <Text as='p' size='sm'>
          sanctificetur nomen tuum
        </Text>
        <Text as='p' size='sm'>
          adveniat regnum tuum
        </Text>
        <Text as='p' size='sm'>
          fiat voluntas tua,
        </Text>
        <Text as='p' size='sm'>
          sicut in cælo et in terra.
        </Text>
        <Text as='p' size='sm'>
          Panem nostrum quotidianum da nobis hodie,
        </Text>
        <Text as='p' size='sm'>
          et dimitte nobis debita nostra,
        </Text>
        <Text as='p' size='sm'>
          sicut et nos dimittimus debitoribus nostris
        </Text>
        <Text as='p' size='sm'>
          et ne nos inducas in tentationem
        </Text>
        <Text as='p' size='sm'>
          sed libera nos a malo. Amen.
        </Text>
      </Box>
      <Box>
        <Heading as='h2' size='md' css={{ marginBottom: '1rem' }}>
          Português:
        </Heading>
        <Text as='p' size='sm'>
          Pai nosso,
        </Text>
        <Text as='p' size='sm'>
          que estais nos Céus,
        </Text>
        <Text as='p' size='sm'>
          santificado seja o Vosso Nome
        </Text>
        <Text as='p' size='sm'>
          venha a nós o Vosso Reino,
        </Text>
        <Text as='p' size='sm'>
          seja feita a Vossa vontade
        </Text>
        <Text as='p' size='sm'>
          assim na terra como no Céu.
        </Text>
        <Text as='p' size='sm'>
          O pão nosso de cada dia nos dai hoje
        </Text>
        <Text as='p' size='sm'>
          perdoai-nos as nossas ofensas
        </Text>
        <Text as='p' size='sm'>
          assim como nós perdoamos a quem nos tem ofendido
        </Text>
        <Text as='p' size='sm'>
          e não nos deixeis cair em tentação,
        </Text>
        <Text as='p' size='sm'>
          mas livrai-nos do mal. Amem
        </Text>
      </Box>
    </Box>
  )
}

export default PaterNoster
