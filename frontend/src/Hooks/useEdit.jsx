const useEdit = () => {
  const editProduct = async (id, productData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })

      if (!response.ok) {
        throw new Error('Failed to update product')
      }

      return true
    } catch (error) {
      console.error('Error updating product:', error)
      return false
    }
  }

  return { editProduct }
}

export default useEdit
