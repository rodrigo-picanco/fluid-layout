// Packages
import styled from 'styled-components'
import { prop, ifNotProp } from 'styled-tools'

// Types
import { CoverProps } from './interface'

/**
 * Cover is perfect for heros and landing pages. You define a central component the rest will flow arround it. For that, you have to specify a "centered" prop, which receives a css selector for the child you want to repell it's siblings from. If you want to repell the child only above or bellow, there are two flags for that, onlyTop and onlyBottom. There's also two props to define the spacings of the content. "space" defines the space arround the content and gutter defines the space between the Cover's children.
 *
 *
 */
export const Cover = styled.div<CoverProps>`
  & {
    display: flex;
    flex-direction: column;
    min-height: ${prop('minHeight')};
    padding: ${prop('space')};
  }

  & > * {
    margin-top: ${prop('gutter')};
    margin-bottom: ${prop('gutter')};
  }

  & > :first-child:not(${prop('centered')}) {
    margin-top: 0;
  }

  & > :last-child:not(${prop('centered')}) {
    margin-bottom: 0;
  }

  & > ${prop('centered')} {
    margin-top: ${ifNotProp('onlyBottom', 'auto')};
    margin-bottom: ${ifNotProp('onlyTop', 'auto')};
  }
`
