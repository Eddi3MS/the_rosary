import React from 'react'
import { Box, Heading, Text } from '@ems-ignite/react'

const Anjo = () => {
  return (
    <Box className='flex' css={{ border: 'none', paddingInline: 0 }}>
      <Box>
        <Heading as='h2' size='md' css={{ marginBottom: '1rem' }}>
          Latim:
        </Heading>
        <Text as='p' size='sm'>
          O mi Iesu,
        </Text>
        <Text as='p' size='sm'>
          dimitte nobis debita nostra,
        </Text>
        <Text as='p' size='sm'>
          libera nos ab igne inferni,
        </Text>
        <Text as='p' size='sm'>
          conduc in cælum omnes animas,
        </Text>
        <Text as='p' size='sm'>
          præsertim illas quæ maxime
        </Text>
        <Text as='p' size='sm'>
          indigent misericordia tua.
        </Text>
      </Box>
      <Box>
        <Heading as='h2' size='md' css={{ marginBottom: '1rem' }}>
          Português:
        </Heading>
        <Text as='p' size='sm'>
          Oh meu Jesus,
        </Text>
        <Text as='p' size='sm'>
          perdoai-nos as nossas dividas,
        </Text>
        <Text as='p' size='sm'>
          livrai-nos do inferno.
        </Text>
        <Text as='p' size='sm'>
          Levai as almas todas para o céu.
        </Text>
        <Text as='p' size='sm'>
          E socorrei principalmente as que mais
        </Text>
        <Text as='p' size='sm'>
          precisarem da vossa infinita misericórdia.
        </Text>
      </Box>
    </Box>
  )
}

export default Anjo
