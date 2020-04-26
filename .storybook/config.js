import { configure, addParameters, addDecorator } from '@storybook/react'
import { create } from '@storybook/theming'
import centered from '@storybook/addon-centered/react'

const theme = create({
  fontBase: 'mono',
  fontCode: 'mono',
  url: 'https://github.com/rodrigo-picanco/fluid-layout/'
})

addParameters({
  options: {
    theme,
    showPanel: false,
    panelPosition: 'right',
    storySort: (a, b) => {
      if (a[0].includes('docs-')) {
        if (a[0].includes('intro-')) {
          return -1
        }

        return 0
      }

      return 1
    }
  }
})

// Custom center decorator that supports docs extensions
addDecorator((...args) => {
  const params = new URL(document.location).searchParams
  const isInDockView = params.get('viewMode') === 'docs'
  if (isInDockView) {
    return args[0]()
  }
  return centered(...args)
})

const loadStories = () => {
  return [require.context('../src', true, /story\.mdx$/)]
}

configure(loadStories(), module)
