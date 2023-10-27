import { SelectDaysStyle } from './styles'

export function SelectDays() {
  return (
    <div>
      <SelectDaysStyle>
        <option>
          FILTRAR: <span className="timeSet">ESSE MÊS</span>
        </option>
        <option>
          <span className="timeSet">ÚLTIMOS 30 DIAS</span>
        </option>
        <option>
          <span className="timeSet">ÚLTIMOS 60 DIAS</span>
        </option>
      </SelectDaysStyle>
    </div>
  )
}
