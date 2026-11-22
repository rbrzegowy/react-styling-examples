// Obsługa responsywności - breakpointy sm, md, ...
// Prefix  Minimalna szerokość  CSS Media Query
// sm      640 px (40 rem)     @media (width >= 40rem)
// md      768 px (48 rem)     @media (width >= 48rem)
// lg      1024 px (64 rem)    @media (width >= 64rem)
// xl      1280 px (80 rem)    @media (width >= 80rem)
// 2xl     1536 px (96 rem)    @media (width >= 96rem)

// komentarz - px wyliczone dla standardowego font-size: 16px!

export function TailwindResponsive() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map(n => (
        <div key={n} className="rounded-lg bg-slate-100 p-4 text-slate-900">
          Karta {n}
        </div>
      ))}
    </div>
  )
}

// dodatkowo - ograniczenie do max szerokości:

// schowany do md, widoczny powyżej
// <div className="max-md:hidden">Widoczny od 768px</div>

// background od 768 do <1024
// div className="md:max-lg:bg-blue-500">
//    Niebieskie tło od 768px do poniżej 1024px
// </div>

// można się wyłamać z customowym breakpointem:
// <div className="min-[900px]:grid-cols-3">...</div>

// można definiować własne breakpointy (na poziomie root styli oczywiście):
// @theme {
//   --breakpoint-xs: 30rem;
//   --breakpoint-3xl: 120rem;
// }
