// Packages
import styled from 'styled-components'
import { prop } from 'styled-tools'

// Types
import { CenterProps } from './interface'

export const Center = styled.div<CenterProps>`
  align-items: center;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 60ch;
  padding-left: ${prop('gutter')};
  padding-right: ${prop('gutter')};
`
