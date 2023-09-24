import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ category }) => {
    return (

        <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={category.logo} alt={category.category_name} />

            <h5 className="mb-2 text-left mt-5 font-semibold tracking-tight text-gray-900 dark:text-white">{category.category_name}</h5>

            <p className="mb-3 text-left font-normal text-gray-500 dark:text-gray-400">{category.availability}</p>
            <div className='text-left'>
                <Link to="#" className="inline-flex items-center text-blue-600 hover:underline">
                    See our guideline
                    <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </Link>
            </div>
        </div>

    )
}

export default Category