import { useEffect, useState } from 'react'

const useFetch = (url: string, options: RequestInit = {}, defaultValue: any) => {
  const [response, setResponse] = useState(defaultValue)
  const [error, setError] = useState(Error)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const fetchData = async () => {
      if (status !== 'loading') setStatus('reloading')

      try {
        const res = await fetch(url, options)
        const json = await res.json()

        setResponse(json)
        setStatus('loaded')
      } catch (error) {
        setError(error)
      }
    }

    fetchData()
  }, [url])

  return { response, error, status }
}

export default useFetch 
