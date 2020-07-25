import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { addParameters } from '@storybook/client-api'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)
addDecorator(withInfo({ inline: true }))

addParameters({
  viewport: {
    viewports: { ...MINIMAL_VIEWPORTS }
  }
})
