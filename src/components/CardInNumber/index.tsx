import { RadialBar } from '../RadialTotal'
import { NumberCardStyle } from './styles'

type Props = {
  variant: 'up' | 'down' | 'average' | 'lastDays'
  productNumber: number
  tagPercentage?: number
  radialPercentage?: number
  days?: number
  type: 'client' | 'product'
}

export function NumberCard({
  variant,
  productNumber,
  tagPercentage,
  radialPercentage,
  days,
  type
}: Props) {
  return (
    <NumberCardStyle variant={variant}>
      {radialPercentage && <RadialBar radialPercentage={radialPercentage} />}
      <div>
        {variant === 'up' && (
          <p>
            Total <span>{type === 'product' ? 'produtos' : 'clientes'}</span> em
            alta
          </p>
        )}
        {variant === 'down' && (
          <p>
            Total <span>{type === 'product' ? 'produtos' : 'clientes'}</span> em
            baixa
          </p>
        )}
        {variant === 'average' && <p>Média {days} dias</p>}
        {variant === 'lastDays' && <p>Últimos {days} dias</p>}

        <div className="numberDiv">
          <span className="number">{productNumber}</span>{' '}
          {tagPercentage && (
            <div className="tagPercentage">
              {variant === 'up' ? '+' : ''}
              {tagPercentage}%
            </div>
          )}
        </div>
      </div>
    </NumberCardStyle>
  )
}
