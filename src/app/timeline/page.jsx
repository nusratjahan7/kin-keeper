'use client'
import { useEffect, useState } from 'react'
import { Phone, MessageSquare, Video, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const iconConfig = {
  Call: { Icon: Phone, bg: 'bg-green-50', color: 'text-green-700' },
  Text: { Icon: MessageSquare, bg: 'bg-blue-50', color: 'text-blue-700' },
  Video: { Icon: Video, bg: 'bg-purple-50', color: 'text-purple-700' },
}

const Timeline = () => {
  const [entries, setEntries] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('timeline') || '[]')
    setEntries(saved)
    setLoaded(true)
  }, [])

  function deleteEntry(id) {
    const updated = entries.filter(entry => entry.id !== id)
    setEntries(updated)
    localStorage.setItem('timeline', JSON.stringify(updated))
  }

  return (
    <section className="w-11/12 mx-auto">

      {/* Back button */}
      <Link href="/">
        <button className="flex gap-1 my-4 text-md font-bold items-center">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      </Link>

      <h1 className="text-2xl font-bold text-white mb-6">Timeline</h1>

      {/* Loading state */}
      {!loaded && (
        <p className="text-center text-gray-400 py-12">Loading...</p>
      )}

      {/* Empty state */}
      {loaded && entries.length === 0 && (
        <div className="rounded-xl bg-base-200  mb-9 px-4 py-10 text-center">
          <p className="text-gray-400 text-sm">No interactions yet.</p>
          <p className="text-gray-500 text-xs mt-1">
            Go to a friend's page and tap Call, Text, or Video.
          </p>
        </div>
      )}

      {/* Entries list */}
      {loaded && entries.length > 0 && (
        <div className="rounded-xl mb-9 bg-base-200 divide-y divide-base-300">
          {entries.map(entry => {
            const { Icon, bg, color } = iconConfig[entry.type] || iconConfig.Call
            return (
              <div key={entry.id} className="flex items-center justify-between p-4">

                <div className='flex items-center gap-4 '>
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-5 w-5 ${color}`} strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{entry.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {entry.date} at {entry.time}
                    </p>
                  </div>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="text-xs btn btn-soft btn-error"
                >
                  Remove
                </button>


              </div>
            )
          })}

        </div>
      )}

    </section>
  )
}

export default Timeline