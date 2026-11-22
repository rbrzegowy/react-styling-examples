// Tailwind - framework CSS oparty o zdefiniowane klasy CSS. Aktualnie najpopularniejszy.

// Idea
// - zrobię zestaw klas CSS, wy się ich nauczycie, wszyscy będziemy pracować z tymi samymi nazwami, we wszystkich projektach.
// - nazwy klas odzwierciedlają jaki styl zmieniają i jaką wartość nadają
// - style komponentu "komponujemy" z zestawu klas

// Przykłady klas z Tailwind:
// flex               - 	display: flex
// p-4	              -   padding: calc(var(--spacing) * 4)
// rounded-lg	        -   border-radius ze zmiennej motywu
// bg-blue-600        -   background-color z palety
// font-semibold	    -   font-weight: 600
// hover:bg-blue-700  -   reguła dla stanu hover
// md:flex-row	      -   flex, układ poziomy od określonego breakpointu (md)
// dark:bg-slate-900  -   styl dla wariantu ciemnego

// Użycie
// npm  - packages.json
// @import "tailwindcss" (index.css)

export function TailwindProductCard({
  name = 'Tailwind, zjedz snickersa...',
  description = 'Kurs na CSS-a',
  price = 199,
  featured = true,
}: {
  name?: string
  description?: string
  price?: number
  featured?: boolean
}) {
  return (
    <article
      className={`max-w-sm rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-lg ${featured ? 'border-amber-400 bg-amber-50' : 'border-slate-200 bg-white'}`}
    >
      <h2 className="mb-2 text-xl font-semibold text-slate-900">{name}</h2>
      <p className="mb-4 text-sm text-slate-500">{description}</p>
      <div className="flex items-center justify-between gap-4">
        <strong className="text-lg text-slate-900">{price} zł</strong>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          Kup teraz
        </button>
      </div>
    </article>
  )
}
