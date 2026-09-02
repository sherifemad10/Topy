import React from 'react'
import useFetch from './useFetch';

const useSearch = () => {
      const { product  } = useFetch()
  const [searchTerm, setSearchTerm] = React.useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredProducts = React.useMemo(() => {
    if (!searchTerm) return [];

    return product.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return { searchTerm, handleSearch, filteredProducts };

}

export default useSearch
