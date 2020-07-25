// Packages
import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'

// Types
import { FrameProps } from './interface'

/**
 * Frame is the component that won't let you worry about media aspect ratio anymore. You define the numerator (9 in 16:9) and denominator (16 in 16:9) of the aspect ratio and can change the object-position css of the media.
 */
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
