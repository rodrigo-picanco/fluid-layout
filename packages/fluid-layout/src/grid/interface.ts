// Packages
import * as CSS from 'csstype'

/**
 * Defines the props of the Grid component
 *
 * @interface GridProps
 * @property {CSS.GridGapProperty} gutter the css grid-gutter of the grid 
 * @property {CSS.MaxWidthProperty} min the minimal width of a collumn in the grid 
 */
export interface GridProps {
  gutter: CSS.GridGapProperty<string>
  min: CSS.MaxWidthProperty<string>
}
