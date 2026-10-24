import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading..')
  
  useEffect(() => {
    fetch('/api/hello', {cache: 'no-store'})
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json()
    })
    .then(data => setMessage(data.message))
    .catch(err => setMessage(`Backend not reachable (${err.message})`))
  }, [])

  return <h1>{message}</h1>
}

export default App
