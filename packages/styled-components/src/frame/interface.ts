// Packages
import * as CSS from 'csstype'

/**
 * Defines the props of the Frame components
 *
 * @interface FrameProps
 * @property  {CSS.ObjectPositionProperty} [objectPosition] The css object-position property of the Frame
 * @property  {number} numerator The numerator of the ratio calculation
 * @property  {number} denominator The numerator of the ratio calculation
 */
export interface FrameProps {
  objectPosition?: CSS.ObjectPositionProperty<string>
  numerator: number
  denominator: number
}
