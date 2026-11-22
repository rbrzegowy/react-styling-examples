// Importowane style są globalne, można ich reużywać w innych komponentach
// Brak wbudowanej enkapsulacji styli komponentu
// Problem duplikacji id

// używanie klass CSS - właściwość className (ponieważ class jest zastrzeżone)

import './01-global-css.css'
export function GlobalCss() {
  return (
    <>
      <Buttons />
      <Buttons />
    </>
  )
}
function Buttons() {
  return (
    <div>
      <button id="action-button" className="button button-primary">
        Zapisz
      </button>{' '}
      <button className="button">Anuluj</button>
    </div>
  )
}
