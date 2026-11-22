// css @layer pozwala wprost zdefiniować priorytet styli.
// @layer działa niezależnie od CSS Specificity, kaskadowości, kolejności oraz !important
// świetnie się sprawdza w apkach w pracy ze stylami/layer - baza, theme, biblioteki

import './24-cascade-layers.css'
export function CascadeLayers() {
  return (
    <button id="btn" className="layer-demo-button">
      Przycisk z @layer
    </button>
  )
}
