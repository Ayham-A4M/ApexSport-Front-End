
import Nav from '../NavBar/Nav'
import Footer from '../pages/Footer'
import { Outlet } from 'react-router-dom'
import ScrollUpButton from '../components/ScrollUpButton'

function MainLayout({ user }) {


    return (

        <div className='relative'>

            <Nav />
            <div className='main-container min-h-[100vh] mt-[50px] px-[70px] max-[900px]:px-[55px] max-[700px]:px-[10px] py-[30px]'>
                <Outlet />
            </div>
            <ScrollUpButton />
            <Footer />
        </div>






    )
}

export default MainLayout