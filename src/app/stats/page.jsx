
'use client'
import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const iconConfig = {
  Call: { color: '#82ca9d' },
  Text: { color: '#8884d8' },
  Video: { color: '#00bcd4' },
}

const Chart = () => {
  const [entries, setEntries] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('timeline') || '[]')
    setEntries(saved)
    setLoaded(true)
  }, [])

  // Function to count the interactions by type (Text, Call, Video)
  const getInteractionCounts = () => {
    const counts = { Text: 0, Call: 0, Video: 0 }
    entries.forEach(entry => {
      if (entry.type === 'Text') counts.Text++
      if (entry.type === 'Call') counts.Call++
      if (entry.type === 'Video') counts.Video++
    })
    return counts
  }

  const interactionCounts = getInteractionCounts()

  return (
    <section className="w-11/12 mx-auto mt-4">

      <h1 className="text-3xl font-bold text-white mb-6">Friendship Analytics</h1>

      {/* Interaction Chart */}
      {loaded && entries.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-4 text-white">By Interaction Type</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Text', value: interactionCounts.Text, color: '#8884d8' },
                  { name: 'Call', value: interactionCounts.Call, color: '#82ca9d' },
                  { name: 'Video', value: interactionCounts.Video, color: '#00bcd4' }
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {[
                  '#8884d8', '#82ca9d', '#00bcd4'
                ].map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend iconType="circle" layout="horizontal" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  )
}

export default Chart