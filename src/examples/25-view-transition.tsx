import { startTransition, useState, ViewTransition } from 'react'
import './25-view-transition.css'

export function CSSViewTransition() {
  const [expanded, setExpanded] = useState(false)
  return (
    <ViewTransition enter="fade-in" exit="fade-out" update="smooth-update">
      <article className="rounded-lg border p-4">
        <h3 className="text-lg font-bold">Kurs React</h3>
        {expanded && (
          <p className="mt-2">Rozszerzony opis kursu i jego zawartości.</p>
        )}
        <button
          className="mt-3 rounded bg-blue-600 px-3 py-2 text-white"
          onClick={() => startTransition(() => setExpanded(v => !v))}
        >
          {expanded ? 'Zwiń' : 'Rozwiń'}
        </button>
      </article>
    </ViewTransition>
  )
}
