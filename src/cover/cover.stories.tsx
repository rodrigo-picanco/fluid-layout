// Packages
import * as React from 'react'
import { text } from '@storybook/addon-knobs'

// Components
import { Cover } from './cover'
import { Cluster } from '../cluster'
import { Box } from '../box'
import { Stack } from '../stack'
import { Center } from '../center'

export default { title: 'Cover', component: Cover }

export const TheHeroOfTheHeros = () => (
  <Cover
    minHeight={text('minHeight', '70vh')}
    space={text('space', '1rem')}
    gutter={text('gutter', '1rem')}
    centered={text('centered', '.call-to-action')}
  >
    <Cluster space="1rem">
      <Box>
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Contact us</a>
      </Box>
    </Cluster>
    <Center className="call-to-action">
      <Stack space="1rem">
        <h1>Wellcome!</h1>
        <h2>A text to explain something to the user</h2>
      </Stack>
    </Center>
    <Center>
      <a href="#">scroll down ↓</a>
    </Center>
  </Cover>
)
