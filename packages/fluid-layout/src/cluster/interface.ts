// Packages
import * as CSS from 'csstype'

/**
 * Defines the props of the Cluster
 *
 * @interface ClusterProps 
 * @property {CSS.AlignItemsProperty} [align] The css align-items property
 * @property {CSS.JustifyContentProperty} [justify] The css justify content property
 * @property {CSS.MarginProperty} [space] The space between the items of the grid
 * @property {boolean} [noWrap] Flag to tell if the flex grid should wrap or not 
 * @property {boolean} [showOverflow] Flag to tell if the flex grid should show it's oveflow 
 */
export interface ClusterProps {
  noWrap?: boolean
  align?: CSS.AlignItemsProperty
  justify?: CSS.JustifyContentProperty
  space?: CSS.MarginProperty<string>
  showOverflow?: boolean
}
