// Class Variance Authority - deklaracje wariantów komponentu
// pozwala w łatwy i czysty sposób budować zestawy klas w zależności od wybranego wariantu
// szerzej - można definiować w ten sposób cały design systemu/aplikacji

import { cva, type VariantProps } from 'class-variance-authority'
const buttonVariants = cva('rounded-lg px-4 py-2 font-medium', {
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white',
      secondary: 'bg-gray-200 text-gray-900',
    },
    size: { small: 'text-sm', large: 'text-lg' },
  },
  defaultVariants: { variant: 'primary', size: 'small' },
})
type Props = VariantProps<typeof buttonVariants> & {
  children?: React.ReactNode
}
export function CvaButton({
  variant = 'secondary',
  size = 'large',
  children = 'Przycisk CVA',
}: Props) {
  return (
    <button className={buttonVariants({ variant, size })}>{children}</button>
  )
}
