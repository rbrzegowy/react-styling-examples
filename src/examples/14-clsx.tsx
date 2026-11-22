// CLSX - biblioteka helper do budowania zestawu klas
// Rozwiązuje problem złożonych komponentów z wieloma stanami/wariantami
// funkcja clsx() pozwala łatwo definiować zestawy klas zamiast robienia długiego ``
import clsx from 'clsx'
export function Clsx({
  primary = true,
  disabled = false,
}: {
  primary?: boolean
  disabled?: boolean
}) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        'rounded-lg px-4 py-2',
        primary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900',
        disabled && 'cursor-not-allowed opacity-50',
      )}
      // bez clsx():
      // className={`rounded-lg px-4 py-2
      //   ${primary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}
      //   ${disabled ? 'cursor-not-allowed opacity-50' : ''}
      //   `}
    >
      Zapisz
    </button>
  )
}

// Przykłady z npm-a
// // Strings (variadic)
// clsx('foo', true && 'bar', 'baz');
// //=> 'foo bar baz'

// // Objects
// clsx({ foo:true, bar:false, baz:isTrue() });
// //=> 'foo baz'

// // Objects (variadic)
// clsx({ foo:true }, { bar:false }, null, { '--foobar':'hello' });
// //=> 'foo --foobar'

// // Arrays
// clsx(['foo', 0, false, 'bar']);
// //=> 'foo bar'

// // Arrays (variadic)
// clsx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
// //=> 'foo bar baz hello there'

// // Kitchen sink (with nesting)
// clsx('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya');
// //=> 'foo bar hello world cya'
