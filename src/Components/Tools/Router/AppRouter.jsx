import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Home } from '../../Pages/Home/Home'
import { About } from '../../Pages/About'
import { Portfolio } from '../../Pages/Portfolio/Portfoilo'



export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />


            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}