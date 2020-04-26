import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import { ReelProps } from './interface'

export const Reel = styled.div<ReelProps>`
  display: flex;
  height: ${prop('height', 'auto')};
  overflow-x: auto;
  overflow-y: hidden;

  ${ifProp(
    'styleScrollbar',
    css`
      scrollbar-color: ${prop(
          'styleScrollbar.styleScrollbar.trackColor',
          '#fff'
        )}
        ${prop('styleScrollbar.styleScrollbar.thumbColor', '#000')};

      &::-webkit-scrollbar {
        height: 1rem;
      }

      &::-webkit-scrollbar-track {
        background-color: ${prop('styleScrollbar.thumbColor', '#000')};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${prop('styleScrollbar.thumbColor', '#000')};
        background-image: linear-gradient(
          ${prop('styleScrollbar.thumbColor', '#000')} 0,
          ${prop('styleScrollbar.thumbColor', '#000')} 0.25rem,
          ${prop('styleScrollbar.trackColor', '#fff')} 0.25rem,
          ${prop('styleScrollbar.trackColor', '#fff')} 0.75rem,
          ${prop('styleScrollbar.thumbColor', '#000')} 0.75rem
        );
      }
    `
  )}

  & > * {
    flex: 0 0 ${prop('itemWidth', 'auto')};
  }

  & > img {
    height: 100%;
    flex-basis: auto;
    width: auto;
  }

  & > * + * {
    margin-left: ${prop('space', '1rem')};
  }
`
