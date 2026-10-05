import { FeaturePreviewVideo } from './FeaturePreviewVideo'

type OverwatchProductPreviewProps = {
  className?: string
  wide?: boolean
  interactive?: boolean
  priority?: boolean
}

/** Product-page feature preview (same file as homepage inline block). */
export function OverwatchProductPreview({
  className = '',
  wide = false,
  interactive = false,
  priority = false,
}: OverwatchProductPreviewProps) {
  return (
    <FeaturePreviewVideo
      className={className}
      variant="product"
      wide={wide}
      interactive={interactive}
      priority={priority}
    />
  )
}
