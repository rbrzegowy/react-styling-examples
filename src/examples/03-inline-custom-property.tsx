import type { CSSProperties } from 'react'
import './03-inline-custom-property.css'

// style definiowane w osobnym obiekcie typu CSSProperties
// połączenie statycznych definicji w ramach klasy CSS oraz dynamiki za pomocą zmiennej CSS

export function InlineCustomProperty({ progress = 65 }: { progress?: number }) {
  const safe = Math.max(0, Math.min(100, progress))

  const style = { '--progress': `${safe}%` } as CSSProperties

  return (
    <div className="progress">
      <div className="progress__fill" style={style} />
    </div>
  )
}
