// Packages
import styled from 'styled-components'
import { prop } from 'styled-tools'
// Types
import { StackProps } from './interface'

export const Stack = styled.div<StackProps>`
  & {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > * + * {
    margin-top: ${prop('space')};
  }
`
export const StackSplit = styled.div`
  margin-top: auto;
`
