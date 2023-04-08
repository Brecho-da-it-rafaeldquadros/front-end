import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import BasePage from '../../components/basePage'
import Navegation from '../../components/navegation'
import { StyledProfile } from './style'

const Profile = () => {

  const { userId } = useParams()

  useEffect(()=>{
    if( userId ){
      toast.warning("Visualização de usuario como administrador")
    }
  },[])

  return (
    <BasePage>
     
      <StyledProfile>
      <Navegation
        title="USUÁRIO"
        description="Navegue pelas configurações do seu usuario."
        buttons={[
          {
            name:"Pedidos",
            route:`/perfil${userId ? `/${userId}` : ""}`
          },
          {
            name:"Perfil",
            route:"usuario"
          },
          {
            name:"Preferências",
            route:"preferencias"
          },
          {
            name:"Dados bancários",
            route:"dados-bancarios"
          },
          {
            name:"Endereços",
            route:"enderecos"
          }
        ]}
      />
        <Outlet/>
      </StyledProfile>
    </BasePage>
  )
}

export default Profile
