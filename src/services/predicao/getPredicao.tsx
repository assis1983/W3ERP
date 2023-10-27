import axios from 'axios'
import { api } from '../Api/apiservice'

export const getPredicao = async (query: string) => {
  try {
    const response = await api.get('/app/predicao', {
      headers: {
        'X-TENANT-ID': 'arnia'
      },
      params: {
        query
      }
    })

    if (response.status === 200) {
      return response.data.content
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

///////finalizada
