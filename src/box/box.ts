// Packages
import styled from 'styled-components'
import { prop, theme } from 'styled-tools'

// Types
import { BoxProps } from './interface'

/**
 * The Box is the building block of your apps. It can receive four props. It's padding, it's border and it's color and it's backgroundColor.  The latter of default's to the styled-components theme in colors.background, or the #fff color.
 */
export const Box = styled.div<BoxProps>`
  background-color: ${prop(
    'backgroundColor',
    theme('colors.background', '#fff')
  )};
  color: ${prop('color', theme('colors.color', '#000'))};
  padding: ${prop('padding')};
  border: ${prop('border')};
`
