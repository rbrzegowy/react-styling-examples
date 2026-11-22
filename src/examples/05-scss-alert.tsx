import './05-scss-alert.scss'

// Sass - zewnętrzny preprocesor CSS
// Sass wynikowo kompiluje plik do .css, pozwala jednak na znacznie więcej niż czysty CSS
// np. mixiny, zagnieżdżanie styli, pętle, operacje na wartościach (wbudowane biblioteki)

export function ScssAlert({
  message = 'Zapisano pomyślnie!',
  type = 'success',
}: {
  message?: string
  type?: 'success' | 'error'
}) {
  return (
    <div className={`alert alert--${type}`} role="status">
      <span className="alert__message">{message}</span>
    </div>
  )
}
