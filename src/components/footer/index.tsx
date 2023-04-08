import { Centralize, StyledFooter } from './style'
import List from './list'

const Footer = () => {
  
  return (
    <StyledFooter>
      <Centralize>
        <div className='footer__brecho'>
          <img alt="Logo do Brecho da It" />
          <p>
            Brechó da It é uma loja online que lida com todos os produtos e fornece produtos de alta qualidade para  cliente.
          </p>
        </div>
        <List
          nameList="GERAL"
          listButtons={[
            {
              name:"Produtos",
              route:""
            }
          ]}
        />
        <List
          nameList="SEGURANÇA"
          listButtons={[
            {
              name:"Política e Privacidade",
              route:"/privacidade"
            }
          ]}
        />
        <List
          nameList="CONTATOS"
          listButtons={[
            {
              name:"Piauí",
              route:""
            },
            {
              name:"(12) 3456-7890",
              route:""
            },
            {
              name:"support@brechodait.com.br",
              route:""
            }
          ]}
        />
      </Centralize>
    </StyledFooter>
  )
}

export default Footer
