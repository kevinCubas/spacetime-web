'use client'

import { api } from '@/lib/api'
import cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export function DeleteMemoryButton({ id }: { id: string }) {
  const router = useRouter()
  const token = cookies.get('token')

  const handleDeleteMemory = async () => {
    await api.delete(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    router.push('/')
  }

  return (
    <button
      onClick={handleDeleteMemory}
      className="self-end px-4 text-xs text-red-500 hover:text-red-400"
    >
      Apagar memória
    </button>
  )
}
