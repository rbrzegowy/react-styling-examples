// Motywy na bazie czystego CSS

import { useState } from 'react'
import './22-css-themes.css'
export function CssThemes() {
  const [dark, setDark] = useState(false)
  return (
    <section data-demo-theme={dark ? 'dark' : 'light'} className="theme-demo">
      <div className="theme-demo__card">
        <h3>Motyw CSS</h3>
        <p>Custom properties zmieniają się po zmianie atrybutu.</p>
        <button onClick={() => setDark(v => !v)}>Przełącz motyw</button>
      </div>
    </section>
  )
}
