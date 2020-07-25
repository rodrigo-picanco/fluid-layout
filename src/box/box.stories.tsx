// Packages
import * as React from 'react'
import {text } from '@storybook/addon-knobs'

// Components
import { Box } from '../box'

export default {
  title: 'Box',
  component: Box
}

export const TheBuildingBlockOfYourApp = () => (
  <Box color={text('color', '#000')} padding={text('padding', '1rem')} border={text('border', 'initial')} backgroundColor={text('backgroundColor', '#fff')}>
    {text('Content', 'Any content you want')} 
  </Box>
)
