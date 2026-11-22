import { useState } from 'react'
import { GlobalCss } from './examples/01-global-css'
import { InlineStyles } from './examples/02-inline-styles'
import { InlineCustomProperty } from './examples/03-inline-custom-property'
import { BemProductCard } from './examples/04-bem-product-card'
import { ScssAlert } from './examples/05-scss-alert'
import { CssModulesButton } from './examples/06-css-modules-button'
import { CssModulesGlobalComposes } from './examples/07-css-modules-global-composes'
import { StyledComponents } from './examples/08-styled-components'
import { TailwindProductCard } from './examples/09-tailwind-product-card'
import { TailwindResponsive } from './examples/10-tailwind-responsive'
import { TailwindStates } from './examples/11-tailwind-states'
import { TailwindDynamicClasses } from './examples/12-tailwind-dynamic-classes'
import { TailwindTheme } from './examples/13-tailwind-theme'
import { Clsx } from './examples/14-clsx'
import { TailwindMerge } from './examples/15-tailwind-merge'
import { CvaButton } from './examples/16-cva-button'
import { MaterialUiCard } from './examples/17-material-ui-card'
import { MaterialUiSx } from './examples/18-material-ui-sx'
import { MaterialUiTheme } from './examples/19-material-ui-theme'
import { ShadcnCustomButton } from './examples/21-shadcn-custom-button'
import { CssThemes } from './examples/22-css-themes'
import { ContainerQueries } from './examples/23-container-queries'
import { CascadeLayers } from './examples/24-cascade-layers'
import { CSSViewTransition } from './examples/25-view-transition'
import { ShadcnProductCard } from './examples/20-shadcn-product-card'
const demos = [
  { label: '01 — Globalny CSS', component: GlobalCss },
  { label: '02 — Inline styles', component: InlineStyles },
  { label: '03 — Inline + CSS variables', component: InlineCustomProperty },
  { label: '04 — BEM', component: BemProductCard },
  { label: '05 — SCSS', component: ScssAlert },
  { label: '06 — CSS Modules', component: CssModulesButton },
  {
    label: '07 — Modules global/composes',
    component: CssModulesGlobalComposes,
  },
  { label: '08 — styled-components', component: StyledComponents },
  { label: '09 — Tailwind ProductCard', component: TailwindProductCard },
  { label: '10 — Tailwind responsive', component: TailwindResponsive },
  { label: '11 — Tailwind states', component: TailwindStates },
  { label: '12 — Tailwind dynamic', component: TailwindDynamicClasses },
  { label: '13 — Tailwind @theme', component: TailwindTheme },
  { label: '14 — clsx', component: Clsx },
  { label: '15 — tailwind-merge', component: TailwindMerge },
  { label: '16 — CVA', component: CvaButton },
  { label: '17 — MUI Card', component: MaterialUiCard },
  { label: '18 — MUI sx', component: MaterialUiSx },
  { label: '19 — MUI Theme', component: MaterialUiTheme },
  { label: '20 — Shadcn Product Card', component: ShadcnProductCard },
  { label: '21 — shadcn-style custom button', component: ShadcnCustomButton },
  { label: '22 — CSS themes', component: CssThemes },
  { label: '23 — Container queries', component: ContainerQueries },
  { label: '24 — Cascade layers', component: CascadeLayers },
  { label: '25 — ViewTransition', component: CSSViewTransition },
]
export default function App() {
  const [active, setActive] = useState(0)
  const Demo = demos[active].component

  return (
    <main
      style={{
        maxWidth: 920,
        margin: '40px auto',
        padding: 40,
        background: '#f5f5f5',
        borderRadius: 10,
      }}
    >
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Stylowanie
      </h1>
      <p style={{ marginBottom: 20 }}>Wybierz przykład!</p>
      <select
        value={active}
        onChange={e => setActive(Number(e.target.value))}
        style={{
          padding: 10,
          width: '100%',
          marginBottom: 20,
          border: '1px solid #aaa',
          borderRadius: 8,
        }}
      >
        {demos.map((d, i) => (
          <option key={d.label} value={i}>
            {d.label}
          </option>
        ))}
      </select>
      <section
        style={{ border: '1px solid #ddd', borderRadius: 12, padding: 24 }}
      >
        <Demo />
      </section>
    </main>
  )
}
