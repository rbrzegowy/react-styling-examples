import './04-bem-product-card.css'

// BEM - standard nazewnictwa klas CSS
// block__element--modifier
// card__title--disabled
// inne standardy: Atomic CSS (Tailwind), SMACSS, OOCSS, [...]

// Plusy:
// - ustandaryzowane i przewidywalne nazewnictwo klas CSS w projekcie
// - mniejsza szansa na kolizję nazw
// -

export function BemProductCard({
  name = 'BEM CSS Product',
  price = 199,
  featured = true,
}: {
  name?: string
  price?: number
  featured?: boolean
}) {
  return (
    // wyliczane className(s)
    <article
      className={['product-card', featured && 'product-card--featured']
        .filter(Boolean)
        .join(' ')}
    >
      <h2 className="product-card__title">{name}</h2>
      <p className="product-card__price">{price} zł</p>
      <button className="product-card__button">Dodaj do koszyka</button>
    </article>
  )
}
