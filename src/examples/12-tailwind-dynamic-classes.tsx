// Dynamicznie wyliczane klasy CSS
// Nie rzeźbij stringa, użyj słownika.

// źle (tailwind podczas budowania projektu tego nie wyliczy):
{
  /* <div className={`bg-${color}-600`} /> */
}

// dobrze:
const colorClasses = {
  blue: 'bg-blue-600',
  red: 'bg-red-600',
  green: 'bg-green-600',
} as const
export function TailwindDynamicClasses({
  color = 'green',
}: {
  color?: keyof typeof colorClasses
}) {
  return (
    <div className={`${colorClasses[color]} rounded-lg p-4 text-white`}>
      Wybrany kolor: {color}
    </div>
  )
}
// Nie używaj `bg-${color}-600`, bo Tailwind może nie wykryć klasy podczas budowania.
