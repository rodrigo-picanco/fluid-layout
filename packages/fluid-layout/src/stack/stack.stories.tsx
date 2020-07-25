// Packages
import * as React from 'react'
import {array, boolean} from '@storybook/addon-knobs'

// Components
import { Stack, StackSplit } from './stack'
import { Box } from '../box'

export default {
  title: 'Stack',
  component: Stack,
  decorators: [(fn:any) => {
    return <div style={{display: 'flex', minHeight: `50vh`}}>{fn()}</div>
  }]
}

export const VerticalSpacingShouldNotBeAProblem = () => (
  <Stack space="1rem">
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
    {boolean('show split', false) && (
      <StackSplit space="1rem">
        <button >
         A splited call to action 
        </button>
      </StackSplit>
    )}
  </Stack>
)
