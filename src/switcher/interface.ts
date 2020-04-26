import * as CSS from 'csstype'

export interface SwitcherProps {
  threshold: CSS.WidthProperty<1>
  space: CSS.MinWidthProperty<1>
  limit?: number
}
