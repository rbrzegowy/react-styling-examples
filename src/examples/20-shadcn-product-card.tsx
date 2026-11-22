// ShadCDN - biblioteka komponentów. Instalujesz tylko te których potrzebujesz zamiast całej biblioteki (MUI)
// Instalacja:
// npx shadcn@latest init
// komponenty:
//  - npx shadcn@latest add button card badge
//  - polecenie importuje komponenty do projektu - katalog components/ui

// Why oh why?
//  - szybki start
//  - kontrola nad kodem źródłowym używanych komponentów
//  - shadcn jest oparty na Tailwind - znajomo pachnie
//  - możliwość budowania własnego design systemu.
//  - łatwe dostosowywanie komponentów do wymagań projektu.

// Why not?
// - utrzymanie - jak zrobisz łatkę na komponent, to nowa wersja Shadcn może załatać Twoją łatkę;)

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
export function ShadcnProductCard({
  name = 'Kurs React',
  description = 'Nowoczesny frontend',
  price = 199,
}: {
  name?: string
  description?: string
  price?: number
}) {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <Badge variant="secondary" className="w-fit">
          Nowość
        </Badge>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{price} zł</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Dodaj do koszyka</Button>
        <Button variant="outline">Szczegóły</Button>
      </CardFooter>
    </Card>
  )
}
