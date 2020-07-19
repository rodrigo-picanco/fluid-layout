import * as CSS from 'csstype'

export interface ClusterProps {
  noWrap?: boolean
  align?: CSS.AlignItemsProperty
  justify?: CSS.JustifyContentProperty
  space?: CSS.MarginProperty<1>
  showOverflow?: boolean
}
