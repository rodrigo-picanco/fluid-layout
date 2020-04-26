// Packages
import styled from 'styled-components'
import { prop, switchProp, ifNotProp } from 'styled-tools'

// Types
import { SidebarProps } from './interface'

export const Sidebar = styled.div<SidebarProps>`
  overflow: hidden;

  & > * {
    display: flex;
    flex-wrap: wrap;
    align-items: ${ifNotProp('noStretch', 'stretch')};
    margin: calc(${prop('gutter')} / 2 * -1);
  }

  & > * > * {
    margin: calc(${prop('gutter')} / 2);
    flex-basis: ${prop('minWidth')};
    flex-grow: 1;
  }

  &
    > *
    > ${switchProp('side', { left: ':first-child', right: ':last-child' })} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(${prop('minContent')} - ${prop('gutter')});
  }
`
