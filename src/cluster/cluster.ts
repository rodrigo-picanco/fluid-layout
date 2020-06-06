import styled from 'styled-components'
import { ClusterProps } from './interface'
import { ifNotProp, prop } from 'styled-tools'

export const Cluster = styled.div<ClusterProps>`
  overflow: ${ifNotProp('showOverflow', 'hidden')};

  & > * {
    display: flex;
    flex-wrap: ${ifNotProp('noWrap', 'wrap')};
    justify-content: ${prop('justify')};
    align-items: ${prop('align')};
    margin: calc(${prop('space')} / 2 * -1);
  }

  & > * > * {
    margin: calc(${prop('space')} / 2);
  }
`
