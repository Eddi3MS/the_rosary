import React from 'react'
import { Box, Heading, Text } from '@ems-ignite/react'

const AveMaria = () => {
  return (
    <Box className='flex' css={{ border: 'none', paddingInline: 0 }}>
      <Box>
        <Heading as='h2' size='md' css={{ marginBottom: '1rem' }}>
          Latim:
        </Heading>
        <Text as='p' size='sm'>
          Ave Maria, gratia plena,
        </Text>
        <Text as='p' size='sm'>
          Dóminus tecum.
        </Text>
        <Text as='p' size='sm'>
          Benedícta tu in muliéribus,
        </Text>
        <Text as='p' size='sm'>
          et benedíctus fructus ventris tui, Iesus.
        </Text>
        <Text as='p' size='sm'>
          Sancta Maria, Mater Dei,
        </Text>
        <Text as='p' size='sm'>
          ora pro nobis peccatóribus,
        </Text>
        <Text as='p' size='sm'>
          nunc, et in hora mortis nostræ.
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
          Ave Maria, cheia de graça,
        </Text>
        <Text as='p' size='sm'>
          o Senhor é convosco.
        </Text>
        <Text as='p' size='sm'>
          Bendita és tu entre as mulheres,
        </Text>
        <Text as='p' size='sm'>
          e bendito é o fruto do vosso ventre, Jesus.
        </Text>
        <Text as='p' size='sm'>
          Santa Maria, Mãe de Deus,
        </Text>
        <Text as='p' size='sm'>
          rogái por nós pecadores,
        </Text>
        <Text as='p' size='sm'>
          agora, e na hora de nossa morte.
        </Text>
        <Text as='p' size='sm'>
          Amém.
        </Text>
      </Box>
    </Box>
  )
}

export default AveMaria
