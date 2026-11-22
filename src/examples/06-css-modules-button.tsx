// Moduły CSS - sposób na enkapsulację styli komponentu
// Vite przetwarza pliki .module.css(.scss) generując unikalne nazwy .klas, #id, @keyframes
// w html odnosimy się do styli z zaimportowanego modułu: module.nazwaSelektora

// selektory znaczników (np. div) nie są enkapsulowane, pozostają globalne!

// Moduły CSS nie tworzą natywnego Shadow DOM

import styles from './06-css-modules-button.module.css'
export function CssModulesButton({
  children = 'Zapisz',
  variant = 'primary',
}: {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
}) {
  return (
    <>
      <h3 id={styles.header}>Moduły CSS</h3>
      <button className={`${styles.button} ${styles[variant]}`}>
        <span>{children}</span>
      </button>
    </>
  )
}
