"use client";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>
        Henter priser fra forsikringsselskapene...
      </h2>
      <span className='h-2 py-2'>
      </span>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900">
      </div>
    </div>
  )
}
