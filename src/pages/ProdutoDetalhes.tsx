import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft } from '../assets/icons/chevron left'
import { CardTitle2 } from '../components/Cardone'
import { MainContainer } from '../components/ContainerGeral/styles'
import { NumberCard } from '../components/CardInNumber'
import { TableCard } from '../components/TablesCards'
import { TableContainer } from '../components/TableContainer/styles'
import { Title } from '../components/Title/styles'
import { getClientsFromProduct } from '../services/produtos/getClientsFromProduct'
import { getProdutosResumo } from '../services/produtos/getProdutosResumo'
import { colors } from '../theme'

type ProdutoResumoType = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos120Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
}

type ClientsFromProductType = {
  id: number
  nome: string
  percentual: number
  quantidade: number
}[]

const clientTableTitle = ['ID', 'Cliente', 'Percentual', 'Qtd']

export function ProdutoDetalhes() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [produtosResumo, setProdutosResumo] = useState<ProdutoResumoType>(
    {} as ProdutoResumoType
  )
  const [clientsUp, setClientsUp] = useState<ClientsFromProductType>(
    [] as ClientsFromProductType
  )
  const [clientsDown, setClientsDown] = useState<ClientsFromProductType>(
    [] as ClientsFromProductType
  )

  const goToPage = (url: string) => {
    navigate(url)
  }

  useEffect(() => {
    ;(async () => {
      const result = await getProdutosResumo(id!)
      if (result.message) {
        alert(result.message)
      } else {
        setProdutosResumo(result)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const result = await getClientsFromProduct(id!, 'EM_ALTA')
      if (result.message) {
        alert(result.message)
      } else {
        setClientsUp(result)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const result = await getClientsFromProduct(id!, 'EM_BAIXA')
      if (result.message) {
        alert(result.message)
      } else {
        setClientsDown(result)
      }
    })()
  }, [])

  return (
    <MainContainer>
      <Link to="/" className="link">
        <CardTitle2
          backgroundColor={colors.deepBlue}
          icon={<ChevronLeft />}
          text="Detalhamento"
        />
      </Link>

      <div className="pageTitle">
        <Title fontSize={32} color={colors.blue}>
          {produtosResumo.nome}
        </Title>
      </div>
      <div className="productCardSummaryDiv">
        <NumberCard
          variant="average"
          days={120}
          productNumber={produtosResumo.media120Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={30}
          productNumber={produtosResumo.ultimos30Dias}
          tagPercentage={produtosResumo.percentualUltimos30Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={60}
          productNumber={produtosResumo.ultimos60Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={90}
          productNumber={produtosResumo.ultimos90Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={120}
          productNumber={produtosResumo.ultimos120Dias}
          type="product"
        />
      </div>
      <TableContainer>
        <TableCard headers={clientTableTitle} title="clientsDown">
          {clientsDown.map((item, index) => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/cliente/${item.id}`)}
              key={index}
            >
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.percentual}%</td>
              <td>{item.quantidade}</td>
            </tr>
          ))}{' '}
        </TableCard>
        <TableCard headers={clientTableTitle} title="clientsUp">
          {clientsUp.map((item, index) => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/cliente/${item.id}`)}
              key={index}
            >
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.percentual}%</td>
              <td>{item.quantidade}</td>
            </tr>
          ))}
        </TableCard>
      </TableContainer>
    </MainContainer>
  )
}
