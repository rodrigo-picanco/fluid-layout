import * as CSS from 'csstype'

/**
 * Defines the props of the Sidebar component
 *
 * @interface SidebarProps
 * @property {'side' | 'right'} [fixedSide] the side that will have the content
 * @property {CSS.AlignItemsProperty} [align]  the css align-items flexbox property of the sidebar
 * @property {CSS.MarginProperty} [gutter] the spacing between the sidebar items
 * @property {CSS.MinWidthProperty} [contentMinWidth] the min-width of the content, wich is also the breakpoint of the layout 
 * @property {CSS.MinWidthProperty} [sideWidth]  the width of the fixed side 
 * @property {boolean} [noStrech]  a flag to prevent the contents of the sidebar to strech
 * @property {boolean} [overflow]  a flag to show overflow of the sidebar 
 */
export interface SidebarProps {
  align?: CSS.AlignItemsProperty
  contentMinWidth?: CSS.MinWidthProperty<string>
  contentSide: 'left' | 'right'
  asideWidth?: CSS.MinWidthProperty<string>
  gutter?: CSS.MarginProperty<string>
  noStretch?: boolean
  overflow?: boolean
}
