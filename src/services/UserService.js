import createHttp from './BaseService'

const http = createHttp(true)

export const getCurrentUser = () => http.get('/user/me')