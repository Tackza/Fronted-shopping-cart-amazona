import Home from '../components/Home'
import CartPage from '../components/Cart'
import HistoryPage from '../components/History'
import LoginPage from '../components/Login'
import RegisterPage from '../components/Register'
import BuySuccessPage from '../components/BuySuccess'
import AdminPage from '../components/Admin'

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
    }
}

export default {
    guest : {
        allowedRoutes : [
            components.login,
            components.register,
        ],
        redirectRoutes : '/login'
    },
    user : {
        allowedRoutes : [
            components.cart,
            components.history,
            components.home,
            components.buySuccess,
            components.admin,
        ],
        redirectRoutes : '/'
    },
    admin : {
        allowedRoutes : [
            components.home,
        ],
        redirectRoutes : '/'
    }
}