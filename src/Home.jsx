import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
      .then(response => response.json())
      .then(result => {
        setData(result.categories);
        console.log(result.categories);
      })
      .catch(error => console.log('Error fetching the data', error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="buttons">
          <button>Mens</button>
          <button>Womens</button>
          <button>Kids</button>
        </div>

        <div className="search">
          <div className="searchbar">
            <input type="text" name="searchbox" placeholder="Search item" />
            <button>Search</button>
          </div>
        </div>

        <div className="cards-container">
          {data.map((items) => (
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
