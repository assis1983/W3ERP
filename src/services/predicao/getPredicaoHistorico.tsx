import axios from 'axios'
import { api } from '../Api/apiservice'

export const getPredicaoHistorico = async (id: string) => {
  try {
    const response = await api.get(`/app/predicao/${id}/historico`, {
      headers: {
        'X-TENANT-ID': 'arnia'
      }
    })
    console.log(response)
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

///STATUS 200
