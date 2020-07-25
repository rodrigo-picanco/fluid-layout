// Packages
import * as CSS from 'csstype'

/**
 * Define the props for the Center component
 *
 * @property {string} [gutter]
 * @property {string} [gutter]
 */

export interface CenterProps {
  /**
   * The gutter of the Center itself, evolving its children
   */
  gutter?: string

  /**
   * The of maxWidth the Center itself, evolving its children.
   */
  maxWidth?: CSS.MaxWidthProperty<string>
}
