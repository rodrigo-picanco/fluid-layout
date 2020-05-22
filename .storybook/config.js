import { configure, addParameters, addDecorator } from '@storybook/react'
import { create } from '@storybook/theming'
import centered from '@storybook/addon-centered/react'
import styles from '@sambego/storybook-styles'

const theme = create({
  fontBase: 'mono',
  fontCode: 'mono',
  url: 'https://github.com/rodrigo-picanco/fluid-layout/'
})

export const DEFAULT_VIEWPORT = 'responsive';

export const MINIMAL_VIEWPORTS = {
  mobile1: {
    name: 'Small mobile',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  mobile2: {
    name: 'Large mobile',
    styles: {
      height: '896px',
      width: '414px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '1112px',
      width: '834px',
    },
    type: 'tablet',
  },
}

addParameters({
  viewMode: 'docs',
  viewport: {
    viewports: MINIMAL_VIEWPORTS, 
    defaultViewport: DEFAULT_VIEWPORT ,
  },
  options: {
    theme,
    showPanel: false,
  }
})

addDecorator(
  styles({
    fontFamily: 'monospace',
    fontSize: 16,
    background: '#cf0',
    color: '#444',
  })
)

const loadStories = () => {
  return [require.context('../src', true, /story\.mdx$/)]
}

configure(loadStories(), module)
