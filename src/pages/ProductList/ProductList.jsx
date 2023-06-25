import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { formatDate, formatTime } from '../../helpers/helpers';
import Loading from '../../components/Loading/Loading';
import { BsXCircle } from 'react-icons/bs';

const ProductList = () => {
    const location = useLocation();
    const products = location.state;
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [allProduct, setAllProducts] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [statesData, setStatesData] = useState([]);
    const [citiesData, setCitiesData] = useState([]);
  
    useEffect(() => {
      fetchStates();
    }, []);
  
    const fetchStates = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/locations');
        setStatesData(response.data);
      } catch (error) {
        console.log('Error fetching states:', error);
      }
    };
  
    const fetchCities = async (selectedState) => {
      try {
        const response = await axios.get('http://localhost:5050/api/locations');
        const selectedStateData = response.data.find((stateData) => stateData?.state === selectedState);
        setCitiesData(selectedStateData ? selectedStateData?.cities : []);
      } catch (error) {
        console.log('Error fetching cities:', error);
      }
    };

  

    useEffect(() => {
        if (products) {
            setIsLoading(true)
          setAllProducts(products);
          setIsLoading(false)
        }
      }, [products]);

    const handleSearch = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(`http://localhost:5050/api/products?searchTerm=${searchTerm}&state=${selectedState}`);
          setAllProducts(response.data.products);
          setShowResults(true);
          setIsLoading(false)
        } catch (error) {
          console.error(error);
          setIsLoading(false)
        }
      };

      useEffect(() => {
        setIsLoading(true);
        let apiUrl = 'http://localhost:5050/api/products?searchTerm=';
        if (selectedState !== 'all') {
          apiUrl += `&state=${selectedState}`;
          if (selectedCity) {
            apiUrl += `&city=${selectedCity}`;
          }
        }
        
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
            setAllProducts(data.products);
            console.log(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
          });
      }, [selectedState, selectedCity]);
      

      const handleChangeState = (event) => {
        const newState = event.target.value;
        setSelectedState(newState);
        fetchCities(newState); // Call fetchCities with the new selected state
        setSelectedCity(''); // Reset the selected city when the state changes
      };
      
      const handleChangeCity = (event) => {
        setSelectedCity(event.target.value);
        handleSearch(); // Call the search function or the fetch function here
      };
      
    
      const handleChangeSearch = (event) => {
        setSearchTerm(event.target.value);
      };

    return (
<>


{isLoading ? (
            <Loading></Loading>
                ) :
    (
        <div>
            <div className={` mt-4 flex items-center mx-auto max-w-[1000px] bg-gray-100 rounded-lg p-2`}>
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
                                {statesData.map((stateData) => (
                                  <option key={stateData?._id} value={stateData?.state}>
                                    {stateData?.state}
                                  </option>
                                ))}
                                </select>
                           </div>
                    <div className="ml-2">
                                <select
                                value={selectedCity}
                                onChange={handleChangeCity}                         
                                className="block w-full border border-gray-300 rounded py-2 px-4  focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select City</option>        
                                {citiesData.map((city) => (
                                  <option key={city} value={city}>
                                    {city}
                                  </option>
                                ))}
                                </select>
                    </div>
            
            </div>


          {
            
            allProduct?.length===0? 
                    (
                <div className='mx-auto max-w-fit my-[100px] flex items-center'>
                    <BsXCircle className='text-2xl text-gray-500'></BsXCircle>
                    <h1 className='ml-2 text-2xl text-gray-500'>No Products Available !</h1>
                </div>
                    )
            :
            (
                <div className={`product-component max-w-[800px] mx-auto `}>
                {allProduct?.map((product) => (
                  <Link key={product?.id}  to={`/details/${product?._id}`}>
                    <div className=" rounded overflow-hidden shadow-xl mx-4 my-6" style={{ height: '160px', width: '700px' }}>
                      <div className="flex">
                            <div className="w-1/3">
                            <img className="h-full w-full object-cover" src={`http://localhost:5050/uploads/${product?.thumbnail}`} alt={product?.title} />
                            </div>
                            <div className="w-2/3 flex flex-col justify-between">
                            <div className="px-6 py-4">
                              <div className='mb-1'>
                              <Link  className=" text-base underline ">{product?.category}</Link>
                              <Link className=" text-base underline ml-2">{product?.state}</Link>
                              <Link className=" text-base underline ml-2">{product?.city}</Link>
                              </div>
                                <div className="font-semibold text-xl mb-2">{product?.title}</div>
                                <p className="text-gray-700 text-base">{product?.description.slice(0, 100)}.........</p>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-gray-700 text-base font-bold">$ {product?.price}</p>
                            </div>
                            </div>
                      <div className="px-6 py-4">
                      <p className="text-gray-700 text-sm">{formatTime(product?.createdAt)}</p>
                        <p className="text-gray-700 text-sm">{formatDate(product?.createdAt)}</p>
                      </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )
          }

        
     </div>
    )
}
</>
    );
};

export default ProductList;