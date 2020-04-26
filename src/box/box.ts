// Packages
import styled from 'styled-components'
import { prop } from 'styled-tools'

// Types
import { BoxProps } from './interface'

export const Box = styled.div<BoxProps>`
  background-color: ${prop('backgroundColor', '#fff')};
  padding: ${prop('padding')};
  border: ${prop('border')};
`
