// Packages
import * as React from 'react'
import { boolean, text, array } from '@storybook/addon-knobs'

// Components
import { Cluster } from '../cluster'
import { Box } from '../'

export default {
  title: 'Cluster',
  component: Cluster
}

export const TheLastFlexGridYoullNeed = () => (
  <Cluster
    align={text('align', 'flex-start')}
    justify={text('justify', 'flex-start')}
    noWrap={boolean('noWrap', false)}
    showOverflow={boolean('showOverflow', false)}
    space={text('space', '1rem')}
  >
    <Box>
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
    </Box>
  </Cluster>
)
