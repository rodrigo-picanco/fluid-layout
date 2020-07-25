// Packages
import styled from 'styled-components'
import { prop } from 'styled-tools'

// Types
import { CenterProps } from './interface'

/**
 * The Center is used to horizontally centralize stuff.
 * It can receive two props, gutter and maxWidth.
 * These props affect the component itself, not it's children.
 */
export const Center = styled.div<CenterProps>`
  align-items: center;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: ${prop('maxWidth')};
  padding-left: ${prop('gutter')};
  padding-right: ${prop('gutter')};
`
