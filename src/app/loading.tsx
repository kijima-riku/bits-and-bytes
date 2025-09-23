import { LoadingSkeleton } from '@/components/loading-skeleton'

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-12">
              <LoadingSkeleton />
            </div>
          </div>
          <div className="lg:col-span-2">
            <LoadingSkeleton />
          </div>
        </div>
      </div>
    </div>
  )
}
