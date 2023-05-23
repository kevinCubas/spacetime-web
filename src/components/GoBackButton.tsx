import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export function GoBack() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
    >
      <ChevronLeft className="h-4 w-4" />
      Voltar à timeline
    </Link>
  )
}
