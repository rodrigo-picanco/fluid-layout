// Packages
import * as CSS from 'csstype'

/**
 * Defines the props of the Cover component
 *
 * @interface CoverPropso
 * @property {string} centered The css selector that determines which of the cover's children will repell it's sibilings it's top and bottom
 * @property {CSS.MarginProperty} [space] The space wrapping the cover's content
 * @property {CSS.MarginProperty} [gutter] The space between the cover's children that are not the centered one
 * @property {CSS.MinHeightProperty} [minHeight] The css min-height of the cover
 * @property {boolean} [onlyTop] A flag to control if the centered child in the cover's content should repell only it's sibilings above
 * @property {boolean} [onlyBottom] A flag to control if the centered child in the cover's content should repell only it's children bellow 
 */
export interface CoverProps {
  centered: string
  space?: CSS.MarginProperty<string>
  gutter?: CSS.MarginProperty<string>
  minHeight?: CSS.MinHeightProperty<string>
  onlyTop?: boolean
  onlyBottom?: boolean
}
