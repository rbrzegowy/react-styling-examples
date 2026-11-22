// Styled components - zewnętrzne biblioteka typu "CSS w JS"
// Inne przykłady - Emotion, Panda CSS

// Idea - tworzymy combo znacznika ze stylami. W wyniku dostajemy komponent
// w przykładzie - komponent wygeneruj button z randomową nazwą klasy CSS, do niej dopisze reguły styli

// Plusy
// Motywy
// Dynamiczne warianty oparte o zmienne ($variant poniżej)
// Wyliczanie styli za pomocą JS/TS (background, color)

// Plusy ujemne
// Dodatkowe obciążenie klienta JS-em generującym style (Panda CSS robi to na etapie budowania projektu)
// Potencjalne problemy z SSR

import styled from 'styled-components'
// w Typescript możemy wykorzystać typ generyczny do przekazania parametru
// nazwa $variant tworzy tymczasowy element, nie renderowany niepotrzebnie później w DOM
// w czystym JS nie ma generyków, do background można po prostu przekazać zmienną: background: ${backgroundColor}

// można korzystać z m.in. & (:hover) - jak sass oraz strzałek do wyliczania wartości (color, background)
const StyledButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 12px 20px;
  border: 0;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ $variant }) =>
    $variant === 'secondary' ? '#e2e8f0' : '#195e75'};
  color: ${({ $variant }) => ($variant === 'secondary' ? '#0f172a' : 'white')};
  &:hover {
    opacity: 0.85;
  }
`
export function StyledComponents() {
  return <StyledButton $variant="primary">Zapisz zmiany</StyledButton>
}

// wyjaśnienie składni styled.xx``
// `` - template literal
// styled.xx - funkcja tagująca - parsuje template literal
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

// przykład
// function css(strings: TemplateStringsArray, ...values: any) {
//   console.log(strings)
//   console.log(values)
// }

// const color = 'red'

// css`
//   background: ${color};
//   padding: 10px;
// `

// // zwraca:
// // strings = ['\n  background: ', ';\n  padding: 10px;\n']
// // values = ['red']
