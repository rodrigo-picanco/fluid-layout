import * as CSS from 'csstype'

export interface SidebarProps {
  gutter?: CSS.MarginProperty<1>
  side: 'left' | 'right'
  sideWidth?: CSS.MinWidthProperty<1>
  contentMin?: CSS.MinWidthProperty<1>
  noStretch?: boolean
  overflow?: boolean
  align?: CSS.AlignItemsProperty
}
