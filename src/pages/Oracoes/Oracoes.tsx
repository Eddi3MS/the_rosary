import {
  Box,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@ems-ignite/react'
import {
  Anjo,
  AveMaria,
  Credo,
  Gloria,
  PaterNoster,
  SalveRainha,
} from './components'

const Oracoes = () => {
  return (
    <Box className='container'>
      <Tabs defaultValue='tab1'>
        <TabsList css={{ flexWrap: 'wrap', rowGap: '1rem' }}>
          <TabsTrigger
            tabIndex={1}
            value='tab1'
            css={{ minWidth: '100px', textAlign: 'center', lineHeight: '130%' }}
          >
            Credo
          </TabsTrigger>
          <TabsTrigger
            tabIndex={2}
            value='tab2'
            css={{ minWidth: '100px', textAlign: 'center', lineHeight: '130%' }}
          >
            Pai Nosso
          </TabsTrigger>
          <TabsTrigger
            tabIndex={3}
            value='tab3'
            css={{ minWidth: '100px', textAlign: 'center', lineHeight: '130%' }}
          >
            Ave Maria
          </TabsTrigger>
          <TabsTrigger
            tabIndex={4}
            value='tab4'
            css={{ minWidth: '100px', textAlign: 'center', lineHeight: '130%' }}
          >
            Glória
          </TabsTrigger>
          <TabsTrigger
            tabIndex={5}
            value='tab5'
            css={{ minWidth: '100px', textAlign: 'center', lineHeight: '130%' }}
          >
            Anjo de Fátima
          </TabsTrigger>
          <TabsTrigger
            tabIndex={6}
            value='tab6'
            css={{ minWidth: '100px', textAlign: 'center', lineHeight: '130%' }}
          >
            Salve Rainha
          </TabsTrigger>
        </TabsList>
        <TabsContent value='tab1' css={{ padding: 0 }}>
          <Credo />
        </TabsContent>
        <TabsContent value='tab2' css={{ padding: 0 }}>
          <PaterNoster />
        </TabsContent>
        <TabsContent value='tab3' css={{ padding: 0 }}>
          <AveMaria />
        </TabsContent>
        <TabsContent value='tab4' css={{ padding: 0 }}>
          <Gloria />
        </TabsContent>
        <TabsContent value='tab5' css={{ padding: 0 }}>
          <Anjo />
        </TabsContent>
        <TabsContent value='tab6' css={{ padding: 0 }}>
          <SalveRainha />
        </TabsContent>
      </Tabs>
    </Box>
  )
}

export default Oracoes
