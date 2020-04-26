import styled from 'styled-components'
import { prop } from 'styled-tools'

import { GridProps } from './interface'

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-gap: ${prop('gutter')};

  @supports (width: min(${prop('min')}, 100%)) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(${prop('min')}, 100%), 1fr)
    );
  }
`
