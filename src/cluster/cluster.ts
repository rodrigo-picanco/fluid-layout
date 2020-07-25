// Packages
import styled from 'styled-components'
import { ifNotProp, prop } from 'styled-tools'

// Types
import { ClusterProps } from './interface'

/**
 * Cluster is the last flex grid you'll ever need. It can receive up to five props. "Space" is the actual space between the grid items. Align and justify define it's flexbox counter parts align-items and justify-content. Also, there are two flags, "showOverflow" makes the cluster overflow not hidden and "noWrap" prevents the flex-grid from wrapping.
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
