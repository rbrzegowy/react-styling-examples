// właściwość style={{...style}}
// - camelCase
// - jednostka przy wartościach liczbowych nie jest wymagana (domyślnie px) - height, borderRadius
// - przy skrótach już tak (vide margin poniżej)

// statyczne style inline - najczęściej antypattern
// brak @media, pseudoklas (np. :hover), reużywalność, potencjalny problem z kaskadowością,
// ...sylwester się zbliża - pamiętajcie, mieszanie kończy się źle;)

// zamiast styli inline - klasa CSS w module
// style inline mają zastosowanie w przypadku wyliczanych dynamicznie wartości (względem danych albo stanu aplikacji)
// ale nawet wtedy można zrobić klasę CSS + dynamicznie wyliczana zmienna CSS

export function InlineStyles({
  progress = 65,
  color = '#195e75',
}: {
  progress?: number
  color?: string
}) {
  const safe = Math.max(0, Math.min(100, progress))
  return (
    <div
      style={{
        width: '90%',
        height: 12,
        margin: '10px auto',
        backgroundColor: '#e2e8f0',
        borderRadius: 6,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${safe}%`,
          height: '100%',
          backgroundColor: color,
          transition: 'width 300ms ease',
        }}
      />
    </div>
  )
}
