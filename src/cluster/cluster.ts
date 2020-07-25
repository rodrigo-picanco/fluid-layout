// Packages
import styled from 'styled-components'
import { ifNotProp, prop } from 'styled-tools'

// Types
import { ClusterProps } from './interface'

/**
 * The Cluster is the last flex grid you'll ever need. It can receive up to five props. ;?
 */
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
