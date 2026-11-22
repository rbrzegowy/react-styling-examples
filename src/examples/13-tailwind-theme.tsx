// Szablony dla aplikacji - zobacz index.css
// Klasy bg-ideis-500, bg-ideis-600 i rounded-card pochodzą z @theme index.css.
// Czyli konfiguracja tailwinda jest w css:) ... CSS first config.

export function TailwindTheme() {
  return (
    <button className="rounded-card bg-ideis-500 px-4 py-2 text-white hover:bg-ideis-600">
      Przycisk w kolorze ideis
    </button>
  )
}
