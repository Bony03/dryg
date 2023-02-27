import { $authHost, $host } from '.'

export const registration = async (email, password) => {
  const response = await $host.post('api/register', {
    email,
    password,
  })
  return response
}
export const login = async (email, password) => {
  try {
    const response = await $authHost.post('api/login', { email, password })
    localStorage.setItem('token', response.data.token)
    return response.data.user
  } catch (e) {
    console.log(e.message)
  }
}
export const check = async () => {
  const response = await $host.post('api/register')
  return response
}
