// Pseudoklasy i stany - hover, active, disabled, focus, ...

export function TailwindStates() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2">
        Aktywny
      </button>
      <button
        disabled
        className="rounded bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        Wyłączony
      </button>
    </div>
  )
}
