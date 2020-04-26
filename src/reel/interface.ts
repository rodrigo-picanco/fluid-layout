import * as CSS from 'csstype'

interface ScrollbarStyle {
  thumbColor?: CSS.Color
  trackColor?: CSS.Color
}

export interface ReelProps {
  scrollbarStyle?: ScrollbarStyle
  itemWidth?: CSS.WidthProperty<string>
  height?: CSS.HeightProperty<string>
  space: CSS.MarginLeftProperty<string>
}
