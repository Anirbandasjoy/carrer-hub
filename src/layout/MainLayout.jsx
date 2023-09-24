import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Spainer from '../components/Spainer';

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className=''>
                {
                    navigation.state === "loading" ? <Spainer /> : <Outlet />
                }
            </div>


            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout