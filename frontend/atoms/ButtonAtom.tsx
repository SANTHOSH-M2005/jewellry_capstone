import React from 'react'

type ButtonAtomProps = {
  handleSearch: () => void;
};
export default function ButtonAtom(buttonAtomProps: ButtonAtomProps) {
  return (
    <div>
        <button
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3 text-lg font-semibold text-black transition hover:bg-yellow-600 active:scale-[0.98]"
        onClick={buttonAtomProps.handleSearch}
      >
        🔍 Search Similar Jewelry
      </button>
    </div>
  )
}
