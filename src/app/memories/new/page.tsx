import { GoBack } from '@/components/GoBackButton'
import { NewMemoryForm } from '@/components/NewMemoryForm'

export default function NewMemoryPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <GoBack />
      <NewMemoryForm />
    </div>
  )
}
