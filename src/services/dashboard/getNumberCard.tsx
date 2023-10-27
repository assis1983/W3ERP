import axios from 'axios'
import { api } from '../Api/apiservice'

export const getNumberCard = async (dataFim: string, dataInicio: string) => {
  try {
    const response = await api.get('/app/dashboard/resumo', {
      headers: {
        'X-TENANT-ID': 'arnia'
      },
      params: {
        dataFim,
        dataInicio
      }
    })

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

//////Finalizada
