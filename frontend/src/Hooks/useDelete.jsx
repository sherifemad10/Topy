const useDelete = () => {
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete product')
      }

      return true
    } catch (error) {
      console.error('Error deleting product:', error)
      return false
    }
  }

  return { deleteProduct }
}

export default useDelete
