// Packages
import * as CSS from 'csstype'
/** 
  Defines the Box Component props

 @interface BoxProps
 @property {CSS.PaddingProperty} [padding]  The css padding of the box
 @property {CSS.BorderProperty} [border]  The css border of the box
 @property {CSS.PaddingProperty} [backgroundColor]  The css background-color of the box
 @property {CSS.ColorProperty} [color]  The css color of the box
 */
export interface BoxProps {
  padding?: CSS.PaddingProperty<string>
  border?: CSS.BorderProperty<string>
  backgroundColor?: CSS.BackgroundColorProperty
  color?: CSS.ColorProperty
}
