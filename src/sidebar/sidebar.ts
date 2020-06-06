// Packages
import styled from 'styled-components'
import { prop, switchProp, ifNotProp } from 'styled-tools'

// Types
import { SidebarProps } from './interface'

export const Sidebar = styled.div<SidebarProps>`
  --gutter: ${prop('gutter', '0px')};
  --margin: calc(var(--gutter) / 2);
  --side-width: ${prop('sideWidth')};
  --min-content-width: calc(${prop('contentMin')} - var(--gutter));

  overflow: ${ifNotProp('overflow', 'hidden')};

  & > * {
    display: flex;
    flex-wrap: wrap;
    align-items: ${ifNotProp('noStretch', 'stretch', prop('align', 'flex-start'))};
    margin: calc(var(--margin) * -1);
  }

  & > * > * {
    margin: var(--margin);
    flex-basis: var(--side-width);
    flex-grow: 1;
  }

  & > * > ${switchProp('side', { left: ':first-child', right: ':last-child' })} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: var(--min-content-width);
  }
`
