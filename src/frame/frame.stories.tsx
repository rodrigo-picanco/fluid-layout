// Packages
import * as React from 'react'
import { number, text } from '@storybook/addon-knobs'

// Components
import { Frame } from '../frame'

export default {
  title: 'Frame',
  component: Frame
}

export const NeverWorryAboutImageAspectRatioAnymore = () => (
  <Frame
    denominator={number('denominator', 16)}
    numerator={number('numerator', 9)}
    objectPosition={text('objectPosition', 'center')}
  >
    <img
      src={text(
        'image src',
        'https://cdn.pixabay.com/photo/2013/11/05/19/12/urban-205986_960_720.jpg'
      )}
    />
  </Frame>
)
