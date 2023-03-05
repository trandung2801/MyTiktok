import Home from '../pages/Home';
import Following from '../pages/Following';
import Profiles from '../pages/Profiles';
import Upload from '../pages/Upload';

//Layout
import HeaderOnly from '../components/Layout/HeaderOnly';

//Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profiles', component: Profiles},
    { path: '/upload', component: Upload, layout: HeaderOnly}

]

const privateRoutes = [
    
]

export {publicRoutes, privateRoutes} 