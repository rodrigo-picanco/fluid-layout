// Packages
import styled from 'styled-components'
import { prop, switchProp, ifNotProp } from 'styled-tools'

// Types
import { SidebarProps } from './interface'

export const Sidebar = styled.div<SidebarProps>`
  overflow: ${ifNotProp('overflow', 'hidden')};

  & > * {
    align-items: ${ifNotProp(
      'noStretch',
      'stretch',
      prop('align', 'flex-start')
    )};
    display: flex;
    flex-wrap: wrap;
    margin: calc(${prop('gutter', '0px')} / 2 * -1);
  }

  & > * > * {
    flex-basis: ${prop('asideWidth')};
    flex-grow: 1;
    margin: calc(${prop('gutter', '0px')} / 2);
  }

  &
    > *
    > ${switchProp('contentSide', { left: ':first-child', right: ':last-child' })} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(${prop('contentMinWidth')} - ${prop('gutter')});
  }
`
