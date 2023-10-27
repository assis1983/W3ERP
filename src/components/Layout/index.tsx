import { MenuSidebar } from '../SideMenu'
import { UserHeader } from '../UserHeader'

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div style={{ display: 'flex' }}>
      <MenuSidebar />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <UserHeader />
        <main>{children}</main>
      </div>
    </div>
  )
}
