import styled from 'styled-components'
import { CoverProps } from './interface'
import { prop, ifNotProp } from 'styled-tools'

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
