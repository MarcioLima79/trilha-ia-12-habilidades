import { useEffect, useState } from 'react'

const STORAGE_KEY = 'trilha-ia-progress'

function readStoredProgress(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? new Set(parsed) : new Set()
  } catch {
    return new Set()
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<number>>(readStoredProgress)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]))
  }, [completed])

  function toggle(id: number) {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return { completed, toggle }
}
