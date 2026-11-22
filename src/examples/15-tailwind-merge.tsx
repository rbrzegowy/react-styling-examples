// Tailwind merge - dodatkowa biblioteka do wykrywania konfliktów w użytych klasach Tailwind
// np. px-4 px-8 (padding, ale jaki?)
// twMerge('px-4 px-8') zwróci px-8
// pokazuje pazurki jak mamy reużywane dynamiczne zestawy klas - nie pisane wprost w komponencie
import { twMerge } from 'tailwind-merge'
export function TailwindMerge() {
  const className = twMerge(
    'rounded bg-slate-100 px-4 py-2',
    'px-8 bg-blue-600 text-white',
  )
  return (
    <div>
      <button className={className}>Scalone klasy</button>
      <code className="ml-3 text-xs">{className}</code>
    </div>
  )
}
