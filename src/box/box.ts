// Packages
import styled from 'styled-components'
import { prop, theme } from 'styled-tools'

// Types
import { BoxProps } from './interface'

export const Box = styled.div<BoxProps>`
  background-color: ${prop(
    'backgroundColor',
    theme('colors.background', '#fff')
  )};
  padding: ${prop('padding', '1rem')};
  border: ${prop('border')};
`
