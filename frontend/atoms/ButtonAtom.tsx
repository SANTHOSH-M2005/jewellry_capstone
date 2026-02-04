import React from 'react'

export default function ButtonAtom() {
  return (
    <div>
        <button
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3 text-lg font-semibold text-black transition hover:bg-yellow-600 active:scale-[0.98]"
      >
        🔍 Search Similar Jewelry
      </button>
    </div>
  )
}
