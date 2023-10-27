import axios from 'axios'
import { api } from '../Api/apiservice'

export const getUserInfo = async () => {
  try {
    const response = await api.get('/central/usuario/me', {})
    console.log(response.data)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { message: 'Credenciais Inválidas' }
      }

      if (error.response?.status === 404) {
        return { message: 'Página não encontrada' }
      }
    }
  }
}
