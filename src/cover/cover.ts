import styled from 'styled-components'
import { CoverProps } from './interface'
import { prop } from 'styled-tools'

export const Cover = styled.div<CoverProps>`
  & {
    display: flex;
    flex-direction: column;
    min-height: ${prop('minHeight')};
    padding: 1rem;
  }

  & > * {
    margin-top: ${prop('space')};
    margin-bottom: ${prop('space')};
  }

  & > :first-child:not(${prop('center')}) {
    margin-top: 0;
  }

  & > :last-child:not(${prop('center')}) {
    margin-bottom: 0;
  }

  & > ${prop('center')} {
    margin-top: auto;
    margin-bottom: auto;
  }
`
