import React from 'react'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const CategoryList = () => {
    const { data } = useLoaderData();
    return (
        <div className='my-20'>
            <div className='space-y-3'>
                <h1 className='text-center text-2xl text-white font-semibold'>Job Category List</h1>
                <p className='text-center  text-gray-400 text-xs '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4   text-center max-w-4xl mx-auto mt-14 gap-4'>
                {
                    data.map((category) => <Category key={category.id} category={category} />)
                }
            </div>
        </div>
    )
}

export default CategoryList