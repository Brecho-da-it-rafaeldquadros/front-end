import { AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { StyledNavegation, Button, Buttons } from './style'

interface IButton {
  name:string
  route:string
}

interface IPropsNavegation {
  title:string
  description:string
  buttons:IButton[]
}

const Navegation = ( props:IPropsNavegation ) => {
  const navigate = useNavigate()

  return (
    <AnimatePresence>   
      <StyledNavegation>

        <div className='navegation__header_body'>
          <h5>
            { props?.title?.toLocaleUpperCase() }
          </h5>

          <p>
            { props?.description }
          </p>

          <Buttons>
            {
              props?.buttons?.map( ({ name, route }) => 
                <Button onClick={()=>navigate(route)}
                  key={name}
                  whileHover={{ scale: 1.05 }}
                >
                  { name }
                </Button>  
              )
            }
          </Buttons>
        </div>

      </StyledNavegation>    
    </AnimatePresence>
  )
}

export default Navegation
