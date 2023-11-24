import React, { useState } from 'react';
import axios from 'axios';

const SearchUser = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      
      const response = await axios.get(`tu_endpoint_de_busqueda?term=${searchTerm}`);
      const searchData = response.data;
      console.log('Resultados de búsqueda:', searchData);
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
    </div>
  );
};

export default SearchUser;
