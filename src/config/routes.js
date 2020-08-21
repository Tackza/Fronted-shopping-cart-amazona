import Home from '../components/Home'
import CartPage from '../components/Cart'
import HistoryPage from '../components/History'
import LoginPage from '../components/Login'
import RegisterPage from '../components/Register'
import BuySuccessPage from '../components/BuySuccess'
import AdminPage from '../components/Admin'
import LoginForAdminPage from '../components/LoginForAdmin'


const components = {
    home: {
        url: '/',
        component: Home
    },
    cart: {
        url: '/cart',
        component: CartPage
    },
    history : {
        url : '/history',
        component : HistoryPage
    },
    login : {
        url : '/login',
        component: LoginPage
    },
    register : {
        url : '/register',
        component : RegisterPage
    },
    buySuccess : {
        url : '/success',
        component : BuySuccessPage
    },
    admin : {
        url : '/admin',
        component : AdminPage
    },
    loginAdmin : {
        url : '/login/admin',
        component : LoginForAdminPage
    }
}

export default {
    guest : {
        allowedRoutes : [
            components.login,
            components.register,
            components.loginAdmin
        ],
        redirectRoutes : '/login'
    },
    user : {
        allowedRoutes : [
            components.cart,
            components.history,
            components.home,
            components.buySuccess,
           
        ],
        redirectRoutes : '/'
    },
    admin : {
        allowedRoutes : [
            components.home,
            components.admin,
        ],
        redirectRoutes : '/'
    }
}