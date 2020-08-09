const setToken = (token) => {
    localStorage.setItem('ACCESS_TOKEN', token)
}

const getToken = () => {
    return localStorage.getItem('ACCESS_TOEKN')
}

const removeToken = () => {
    localStorage.removeItem('ACCESS_TOKEN')
}

const getRole = () => {
    if (getToken()) {
        return 'user'
    } else {
        return 'guest'
    }
}

export default {
    setToken,
    getToken,
    removeToken,
    getRole
}