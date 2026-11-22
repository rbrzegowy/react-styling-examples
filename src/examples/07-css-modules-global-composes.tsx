import styles from './07-css-modules-global-composes.module.css'

// współdzielenie reguł CSS w modułach - właściwość 'composes'
// klasa z composes zostanie doklejona do host-a (tutaj do button obok .primary)

export function CssModulesGlobalComposes() {
  return (
    <div className={styles.root}>
      <button className={styles.primary}>Przycisk z composes</button>
      <p className="external-widget">Globalna klasa potomka</p>
    </div>
  )
}
