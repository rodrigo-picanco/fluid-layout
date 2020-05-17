import * as CSS from 'csstype'

export interface CoverProps {
  centered: string
  space?: CSS.MarginProperty<1>
  gutter?: CSS.MarginProperty<1>
  minHeight?: CSS.MinHeightProperty<1>
  onlyTop?: boolean
  onlyBottom?: boolean
}
