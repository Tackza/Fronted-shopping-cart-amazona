import HomePage from '../App'
import CartPage from '../components/Cart'
import HistoryPage from '../components/History'
import LoginPage from '../components/Login'
import RegisterPage from '../components/Register'

const components = {
    home: {
        url: '/',
        component: HomePage
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
    }
}

export default {
    guest : {
        allowedRoutes : [
            components.login,
            components.register,
            components.home
        ],
        redirectRoutes : '/'
    },
    user : {
        allowedRoutes : [
            components.cart,
            components.history
        ],
        redirectRoutes : '/'
    }
}