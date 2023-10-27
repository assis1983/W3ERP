import axios from 'axios'
import { api } from '../Api/apiservice'

export const postPredicaoDarBaixa = async (
  id: string,
  predicaoBaixaRequestDTO: string
) => {
  try {
    const response = await api.post(`/app/predicao/${id}/baixa`, {
      header: {
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
