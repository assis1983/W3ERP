import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserProfile } from '../../assets/icons/UserProfile'
import { Title } from '../Title/styles'
import { Subtitle } from '../Subtitle/styles'
import { UserHeadStyle, HeaderStyle, UserOptionsStyle } from './styles'
import { colors } from '../../theme'
import { ChevronDown } from '../../assets/icons/chevron down'
import { getUserInfo } from '../../services/user/getUserInfo'
import { api } from '@/services/Api/apiservice'

type UserInfoType = {
  email: string
  id: number
  nome: string
}

export function UserHeader() {
  const [showOptions, setShowOptions] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    api.defaults.headers.common.Authorization = ``
    navigate(`/login`, { replace: true })
  }

  useEffect(() => {
    ;(async () => {
      const result = await getUserInfo()
      if (result.message) {
        alert(result.message)
      } else {
        setUserInfo(result)
      }
    })()
  }, [])

  return (
    <HeaderStyle>
      <div></div>
      <UserHeadStyle>
        <UserProfile color={colors.blue} />
        <div>
          <Title fontSize={20}>{userInfo.nome}</Title>
          <Subtitle>{userInfo.email}</Subtitle>
        </div>
        <button
          className="dropdown"
          type="button"
          onClick={() => setShowOptions(!showOptions)}
        >
          <ChevronDown />
        </button>
      </UserHeadStyle>

      {showOptions && (
        <UserOptionsStyle>
          <div>
            <button className="logout" type="button" onClick={logout}>
              Sair
            </button>
          </div>
        </UserOptionsStyle>
      )}
    </HeaderStyle>
  )
}
