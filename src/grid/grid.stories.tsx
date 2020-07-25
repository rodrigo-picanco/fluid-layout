// Packages
import * as React from 'react'
import { array, text } from '@storybook/addon-knobs'

// Components
import { Grid } from './grid'
import { Box } from '../box'

export default {
  title: 'Grid',
  component: Grid
}

export const AGridToRuleThemAll = () => (
  <Grid gutter={text('gutter', '1rem')} min={text('min', '30ch')}>
    {array('contents', [
      'One card ',
      'and another ',
      'why not another one ',
      'keep adding comma separated string to see what happens!'
    ]).map(item => (
      <Box padding="1rem" border="2px solid black">
        {item}
      </Box>
    ))}
  </Grid>
)
