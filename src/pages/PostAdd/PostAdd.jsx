import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const categories=[
            "Job",
            "Vehicle",
            "For the home",
            "Residence",
            "Personally",
            "Electronics",
            "Sparetime Hobby",
            "Business operations",
            "Miscellaneous"
    ]
    const user = JSON.parse(localStorage.getItem('user'));
   
console.log(user._id);  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    state: '',
    city: '',
    price: '',
    brand: '',
    seller:user._id,
    category: '',
    thumbnail: null
  });

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
      const selectedStateData = response.data.find((stateData) => stateData.state === selectedState);
      setCitiesData(selectedStateData ? selectedStateData.cities : []);
    } catch (error) {
      console.log('Error fetching cities:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (name === 'state') {
      fetchCities(value);
    }
    // Update the formData based on the field type
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = new FormData();
      // Append all form data to the FormData object
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post('http://localhost:5050/api/products', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
        },
      });
      console.log('Product submitted:', response.data);
      // Reset the form data after submission
      setFormData({
        title: '',
        description: '',
        state: '',
        city: '',
        price: '',
        brand: '',
        category: '',
        thumbnail: '',
      });
    } catch (error) {
      console.log('Error submitting product:', error);
    }
  };
console.log(formData);
  return (
    <div className="flex justify-center items-center my-12">
      <form className="max-w-xl w-full bg-white shadow-md rounded px-8 py-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Product Form</h2>

        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="state">
            State
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            {statesData.map((stateData) => (
              <option key={stateData._id} value={stateData.state}>
                {stateData.state}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="city">
            City
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            {citiesData.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="price">
          Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="brand">
          Brand
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="brand"
            id="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="category">
            Category
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>


        <label className="block mb-2 font-bold text-gray-700" htmlFor="thumbnail">
          Thumbnail
        </label>
        {/* Display the file name if selected */}
        {formData.thumbnail && <p>Selected file: {formData.thumbnail.name}</p>}
        <input
          onChange={handleChange}
          type="file"
          name="thumbnail"
          id="thumbnail"
          className="file-input file-input-bordered w-full"
        />

        <div className="flex mt-2 items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
