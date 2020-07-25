// Packages
import * as React from 'react'
import { array, text } from '@storybook/addon-knobs'

// Components
import { Sidebar } from './sidebar'
import { Box } from '../box'
import { Stack } from '../stack'
import { Cluster } from '../cluster'

export default {
  title: 'Sidebar',
  components: Sidebar
}

export const BuildABlogLayoutIn5Minutes = () => (
  <Stack space="2rem">
    <Cluster space="2rem" justify="space-between">
      <Box>
        <h1>My Blog</h1>

        <Sidebar
          contentSide="left"
          gutter={text('gutter', '0px', 'search bar')}
        >
          <Box>
            <input placeholder="search" />
            <button>Search</button>
          </Box>
        </Sidebar>
      </Box>
    </Cluster>
    <Sidebar
      contentMinWidth={text('contentMinWidth', '20ch', 'main layout')}
      contentSide="right"
      gutter={text('gutter', '2rem', 'main layout')}
    >
      <Box>
        <Stack space="1rem">
          <a href="#">Home</a>
          <a href="#">Post</a>
          <a href="#">Where to find us</a>
          <a href="#">Contact Us</a>
        </Stack>
        <Cluster space="2rem">
          <Box>
            {array('contents', [
              'this really took me five minutes',
              'how can these be so easy',
              'its really responsive too',
              'no media query needed'
            ]).map(item => (
              <Box padding="1rem" border="2px solid black">
                {item}
              </Box>
            ))}
          </Box>
        </Cluster>
      </Box>
    </Sidebar>
  </Stack>
)
