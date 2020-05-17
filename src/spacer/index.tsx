import { flexbox, FlexboxProps } from 'styled-system'
import styled from 'styled-components'
import { toRem } from '~/helpers'

type SpacerProps = FlexboxProps & { gap: number | string }

const Spacer = styled.div<SpacerProps>`
  ${flexbox}
  display: flex;
  justify-content: flex-start;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  > * + * {
    margin-left: ${props => (typeof props.gap === 'number' ? toRem(props.gap) : props.gap)};
  }
`

export default Spacer
