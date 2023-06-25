import React from 'react';
import { BsClock, BsGeoAlt, BsPerson } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom/dist';
import { formatDate, formatTime } from '../../helpers/helpers';

const ProductDetails = () => {
    const data = useLoaderData()
    return (
        <div className='max-w-[1000px] mx-auto'>


            <div className="max-w-[715px] my-5">
                    
                <img className="h-full w-full rounded max-h-[470px]" src={`http://localhost:5050/uploads/${data?.thumbnail}`} alt={data?.title} />
                <div className="flex items-center  mt-4">
                    <BsClock></BsClock>
                    <p className='ml-2'>{formatDate(data?.createdAt)}</p>
                    <p className='ml-1'>{formatTime(data?.createdAt)}</p>
                </div>
                <div className="flex items-center mt-2">
                    <BsGeoAlt></BsGeoAlt>
                    <p className='ml-2'>{data?.city}</p>
                </div>

                <div className='my-5'>
                    <h3 className='text-4xl font-thin'>{data?.title}</h3>
                    <h3 className='text-3xl font-bold mt-2'>$ {data?.price}</h3>             
                </div>
                <div className='my-5'>
                    
                    <h3 className='text-2xl font-bold mt-'>Sold By:</h3>             
                  <div className='flex items-center'>
                    <BsPerson className='text-5xl rounded-full bg-slate-200' />
                  <h3 className='ml-5 text-xl font-semibold'>{data?.seller?.name?.firstName}</h3>
                  </div>
                </div>
                <div className='my-5'>
                    
                    <h3 className='text-2xl font-semibold mt-'>Description:</h3>             
                    <h3 className=' font-base mt-2'>{data?.description}</h3>  
                </div>


            </div>

        </div>
    );
};

export default ProductDetails;