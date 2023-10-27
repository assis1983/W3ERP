import axios from 'axios'
import { api } from '../Api/apiservice'
export const getProductsFromClient = async (
  id: string,
  classificacao: string
) => {
  try {
    const response = await api.get(
      `/app/cliente/${id}/produtos?classificacao=${classificacao}`,
      {
        headers: {
          'X-TENANT-ID': 'arnia'
        },
        params: {
          id,
          classificacao
        }
      }
    )
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { message: 'Credenciais autenticado' }
      }

      if (error.response?.status === 404) {
        return { message: 'Página não encontrada' }
      }
    }
  }
}

//Status 200
