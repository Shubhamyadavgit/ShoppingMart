import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
      .then(response => response.json())
      .then(result => {
        setData(result.categories);
        setFilteredData(result.categories);
      })
      .catch(error => console.log('Error fetching the data', error));
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSearchTerm('');
    if (categoryName === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((category) => category.category_name.toLowerCase() === categoryName.toLowerCase());
      setFilteredData(filtered);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (category) => category.category_name.toLowerCase() === searchTerm.toLowerCase()
      );      
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <div className="container">
        <div className="buttons">
          <button onClick={() => handleCategoryClick('Men')}>Men</button>
          <button onClick={() => handleCategoryClick('Women')}>Women</button>
          <button onClick={() => handleCategoryClick('Kids')}>Kids</button>
        </div>

        <div className="search">
          <div className="searchbar">
            <input
              type="text"
              name="searchbox"
              placeholder="Search item"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <button onClick={handleSearchClick}>Search</button>
          </div>
        </div>

        <div className="cards-container">
          {filteredData.map((items) => (
            <div key={items.category_name} className="cards">
              {items.category_products.map((product) => (
                <Cards key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
