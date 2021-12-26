// Packages
import * as React from 'react'
import { text } from '@storybook/addon-knobs'

// Components
import { Center } from './center'
import { Box } from '../box'

export default {
  title: 'Center',
  component: Center
}

export const HorizontalyCenterStuff = () => (
  <Center gutter={text('gutter', '1rem')} maxWidth={text('maxWidth', '60ch')}>
    <Box border="2px solid black" padding="1rem">
      It's children
    </Box>
  </Center>
)
