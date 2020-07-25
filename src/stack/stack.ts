// Packages
import styled from 'styled-components'
import { prop } from 'styled-tools'

// Types
import { StackProps, StackSplitProps } from './interface'

/**
 * The Stack is your best friend. It spaces items vertically, but only between them. Pass the space prop the define how much.
 */
export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  > * + * {
    margin-top: ${prop('space')};
  }
`

/**
 * The StackSplit breaks the stack and flows forces itself and everything above to the end of the Stack. Pass the space prop to have a min space between the items above
 */
export const StackSplit = styled.div<StackSplitProps>`
  margin-top: auto;
  padding-top: ${prop('space')};
`
