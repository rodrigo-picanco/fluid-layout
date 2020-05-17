import styled from 'styled-components'
import { prop, ifProp } from 'styled-tools'
import { ImposterProps } from './interface'

export const Imposter = styled.div<ImposterProps>`
  position: ${ifProp('fixed', 'fixed', 'absolute')};
  z-index: ${prop('index')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > * {
    overflow: auto;
    max-width: calc(100% - (${prop('space', '0px')} * 2));
    max-height: calc(100% - (${prop('space', '0px')} * 2));
  }
`
