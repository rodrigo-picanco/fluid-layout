// Packages
import * as CSS from 'csstype'

/**
 * Defines the Stack components props
 *
 * @interface StackProps
 * @property {CSS.PaddingProperty} space The space between each item
 */
export interface StackProps {
  space: CSS.PaddingProperty<string>
}


/**
 * Defines the StackSplit components props
 *
 * @interface StackSplitProps
 * @property {CSS.PaddingProperty} space The minial space between the StackSplit and the items above it
 */
export interface StackSplitProps {
  space?: CSS.PaddingProperty<1>
}
