// Packages
import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'

// Types
import { SwitcherProps } from './interface'

export const Switcher = styled.div<SwitcherProps>`
  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc((${prop('space')} / 2) * -1);
  }

  & > * > * {
    flex-grow: 1;
    flex-basis: calc((${prop('threshold')} - (100% - ${prop('space')})) * 999);
    margin: calc(${prop('space')} / 2);
  }

  ${ifProp(
    'limit',
    css`
      & > * > :nth-last-child(n + ${prop('limit')}),
      & > * > :nth-last-child(n + ${prop('limit')}) ~ * {
        flex-basis: 100%;
      }
    `
  )}
`
