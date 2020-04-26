import styled, { css } from 'styled-components'
import { FrameProps } from './interface'
import { prop, ifProp } from 'styled-tools'

export const Frame = styled.div<FrameProps>`
  padding-bottom: calc(${prop('numerator')} / ${prop('denominator')} * 100%);
  position: relative;

  & > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > img,
  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${ifProp(
      'objectPosition',
      css`
        object-position: ${prop('objectPosition')};
      `
    )}
  }
`
