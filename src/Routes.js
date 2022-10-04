import { Route , Routes} from 'react-router-dom'

import {VelkommenPage} from './pages/VelkommenPage'
import {AktiviteterPage} from './pages/AktiviteterPage'
import {NotFoundPage} from './pages/NotFoundPage'
import {SingleAktiviteterPage} from './pages/SingleAktiviteterPage'


export const DefaultRoutes = {
    VelkommenPage:'/',
    AktiviteterPage:'/AktiviteterPage',
    SingleAktiviteterPage:'/AktiviteterPage/:id',
   
}


export const RoutesModule =(
        <Routes>
            {/* the element is the component that is going to be displayed if the path matches the url  */}
            <Route path={DefaultRoutes.VelkommenPage} element={<VelkommenPage />} />
            {/* if the url === AktiviteterPage */}
            <Route path={DefaultRoutes.AktiviteterPage} element={<AktiviteterPage />} />
            {/* if the url === AktiviteterPage/21 */}
            <Route path={DefaultRoutes.SingleAktiviteterPage} element={<SingleAktiviteterPage />} />
            {/* the path with the * means whatever you have  = everything matches  */}
            <Route path={'*'} element={<NotFoundPage />}  />
        </Routes>
    )
