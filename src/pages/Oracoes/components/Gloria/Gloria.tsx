import React from 'react'
import { Box, Heading, Text } from '@ems-ignite/react'

const Gloria = () => {
  return (
    <Box className='flex' css={{ border: 'none', paddingInline: 0 }}>
      <Box>
        <Heading as='h2' size='md' css={{ marginBottom: '1rem' }}>
          Latim:
        </Heading>
        <Text as='p' size='sm'>
          Gloria Patri,
        </Text>
        <Text as='p' size='sm'>
          et Fílio,
        </Text>
        <Text as='p' size='sm'>
          et Spíritui Sáncto.
        </Text>
        <Text as='p' size='sm'>
          Sicut erat in princípio,
        </Text>
        <Text as='p' size='sm'>
          et nunc et semper,
        </Text>
        <Text as='p' size='sm'>
          et in sǽcula sæculórum.
        </Text>
        <Text as='p' size='sm'>
          Amen.
        </Text>
      </Box>
      <Box>
        <Heading as='h2' size='md' css={{ marginBottom: '1rem' }}>
          Português:
        </Heading>
        <Text as='p' size='sm'>
          Gloria ao Pai,
        </Text>
        <Text as='p' size='sm'>
          ao Filho,
        </Text>
        <Text as='p' size='sm'>
          e ao Espirito Santo.
        </Text>
        <Text as='p' size='sm'>
          Assim como era no principio,
        </Text>
        <Text as='p' size='sm'>
          agora e para sempre,
        </Text>
        <Text as='p' size='sm'>
          e pelos séculos dos séculos.
        </Text>
        <Text as='p' size='sm'>
          Amém.
        </Text>
      </Box>
    </Box>
  )
}

export default Gloria
