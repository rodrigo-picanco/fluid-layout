// Packages
import styled from 'styled-components'
import { prop } from 'styled-tools'

// Types
import { GridProps } from './interface'


/**
 * Grid is a responsive css grid with fixed columns. You define the space between the items with the "gutter" prop and the minimal collumn width with the "min" prop. The Grid does the rest. 
 */
export const Grid = styled.div<GridProps>`
  display: grid;
  grid-gap: ${prop('gutter')};

  @supports (width: min(${prop('min')}, 100%)) {
    grid-template-columns: repeat(auto-fit, minmax(min(${prop('min')}, 100%), 1fr));
  }
`
