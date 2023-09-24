import React from 'react'
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'
import FeturesJobs from '../components/FeturesJobs'

const Home = () => {
    return (
        <div >
            <Hero />
            <CategoryList />
            <FeturesJobs />
        </div>
    )
}

export default Home