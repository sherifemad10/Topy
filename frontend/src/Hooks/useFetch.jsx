import { useState, useEffect } from "react"
import axios from "axios"

function useFetch() {
  const [product, setProduct] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products")
        console.log(response.data.data)
        setProduct(response.data.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getProduct()
  }, [refreshKey])

  return { product, error, loading, refetch: () => setRefreshKey((key) => key + 1) }
}

export default useFetch
