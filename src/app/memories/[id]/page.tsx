import { GoBack } from '@/components/GoBackButton'
import { MediaCover } from '@/components/MediaCover'
import { api } from '@/lib/api'
import { IMemory } from '@/types/memoryDetail'
import { formatDate } from '@/util/dateformat'
import { cookies } from 'next/headers'
import { getUser } from '@/lib/auth'
import { UpdateTaskForm } from '@/components/UpdateMemoryForm'
import { DeleteMemoryButton } from '@/components/DeleteMemoryButton'

export default async function DetailsMemoryPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const token = cookies().get('token')?.value
  const { sub } = getUser()

  const response = await api.get(`/memories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory: IMemory = response.data

  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <GoBack />
      <time className="-ml-16 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {formatDate(memory.createdAt)}
      </time>
      {sub !== memory.userId ? (
        <div className="space-y-4">
          {memory.coverUrl.length > 0 && (
            <MediaCover coverUrl={memory.coverUrl} />
          )}
          <p className="text-lg leading-relaxed text-gray-100">
            {memory.content}
          </p>
        </div>
      ) : (
        <>
          <UpdateTaskForm memory={memory} />
          <DeleteMemoryButton id={memory.id} />
        </>
      )}
    </div>
  )
}
