import React, { useEffect, useState } from 'react';
import image from '../../assets/images/moving.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatDate, formatTime } from '../../helpers/helpers';
import { states } from '../../constant/constant';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
    const [selectedState, setSelectedState] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [showResults, setShowResults] = useState(false);
  

    const handleSearch = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/products?searchTerm=${searchTerm}&state=${selectedState}`);
        const products = response.data.products;
        setProducts(products);
    navigate('/product-list', { state: products });
    navigate('/product-list', { state: setProducts });
      } catch (error) {
        console.error(error);
      }
    };
  



 
    const handleChangeState = (event) => {
      setSelectedState(event.target.value);
    };
  
    const handleChangeSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
  

  return (

<>

    <div className={`after-search-hidden bg-cover lg:h-[550px] `} style={{ backgroundImage: `url(${image})` }}>
    
    <div className="flex  py-16 pl-[200px]">
      <div className=" p-6 bg-white rounded-lg shadow-lg">
        <div className="text-3xl font-bold mb-4">Welcome to Rockso</div>
        <div className="text-lg mb-4">Search</div>
        <div className="relative">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            height="16"
            width="16"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12.618 23.319c-6.9 0-10.7-3.8-10.7-10.7 0-6.9 3.8-10.701 10.7-10.701 6.9 0 10.7 3.8 10.7 10.7 0 3.458-.923 6.134-2.745 7.955-1.821 1.822-4.497 2.745-7.955 2.745zm17.491 5.725l-7.677-7.678c1.854-2.155 2.804-5.087 2.804-8.748C25.236 4.6 20.636 0 12.618 0S0 4.6 0 12.618c0 8.019 4.6 12.618 12.618 12.618 3.485 0 6.317-.85 8.44-2.531l7.696 7.695 1.355-1.356z"
              clipRule="evenodd"
            />
          </svg>
          <input
            value={searchTerm}
            onChange={handleChangeSearch}
            type="text"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What do you want to search for?"
            aria-label="Search"
          />
        </div>
        <div className="text-lg mt-4">Choose location</div>
        <select
         value={selectedState}

         onChange={handleChangeState}
         className="block w-full border border-gray-300 rounded py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Whole Kenya</option>        
   {
      states.map((state)=>  <option key={state} value={state}>{state}</option>)
   }
        </select>
        <button onClick={handleSearch} className="search-button mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full">
          Search
        </button>
      </div>
    </div>
  </div>



{/* 
  <div className={`initially-hidden  flex items-center mx-auto max-w-[1000px] bg-gray-100 rounded-lg p-2`}>
    <div data-cy="searchbox" className="flex-1">
        <div className="relative flex">
          <input
            value={searchTerm}
            onChange={handleChangeSearch}
            type="text"
            autoComplete="off"
            className="pl-10 pr-14 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="What do you want to search for?"
            aria-label="What do you want to search for?"
          />
          <button
            onClick={handleSearch}
            className="search-button absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
          >
            Search
          </button>
        </div>
   </div>


      <div className="ml-2">
                <select
                  value={selectedState}
                  onChange={handleChangeState}
                  className="block w-full border border-gray-300 rounded py-2 px-4  focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Whole Kenya</option>        
            {
                states.map((state)=>  <option key={state} value={state}>{state}</option>)
            }
                </select>
      </div>
      <div className="ml-2">
                <select
                  value={selectedState}
                  onChange={handleChangeState}
                  className="block w-full border border-gray-300 rounded py-2 px-4  focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Whole Kenya</option>        
            {
                states.map((state)=>  <option key={state} value={state}>{state}</option>)
            }
                </select>
      </div>
</div>


<div className={`product-component max-w-[800px] mx-auto `}>
      {products.map((product) => (
        <Link to={`/details/${product._id}`}>
          <div key={product.id} className=" rounded overflow-hidden shadow-xl mx-4 my-6" style={{ height: '160px', width: '700px' }}>
            <div className="flex">
                  <div className="w-1/3">
                  <img className="h-full w-full object-cover" src={`http://localhost:5050/uploads/${product.thumbnail}`} alt={product.title} />
                  </div>
                  <div className="w-2/3 flex flex-col justify-between">
                  <div className="px-6 py-4">
                    <div className='mb-1'>
                    <Link  className=" text-base underline ">{product.category}</Link>
                    <Link className=" text-base underline ml-2">{product.state}</Link>
                    </div>
                      <div className="font-semibold text-xl mb-2">{product.title}</div>
                      <p className="text-gray-700 text-base">{product.description.slice(0, 100)}.........</p>
                  </div>
                  <div className="px-6 py-4">
                      <p className="text-gray-700 text-base font-bold">$ {product.price}</p>
                  </div>
                  </div>
            <div className="px-6 py-4">
            <p className="text-gray-700 text-sm">{formatTime(product.createdAt)}</p>
              <p className="text-gray-700 text-sm">{formatDate(product.createdAt)}</p>
            </div>
            </div>
          </div>
        </Link>
      ))}
    </div> */}

    </>
  );
};

export default Home;
