import { useNavigate } from 'react-router-dom'
import { StyledList } from './style'
import { motion } from 'framer-motion'

interface IButton {
  name:string
  route?:string
}

interface IPropsList {
  nameList:string
  listButtons:IButton[]
}

const List = ( props:IPropsList ) => {
  const navigate = useNavigate()

  return (
    <StyledList>
      <h6 className='list__title'>
         { props?.nameList?.toLocaleUpperCase() }
      </h6>
      <nav className='list__nav'>
        {
          props?.listButtons?.map( button =>
            <motion.button onClick={()=>button?.route&&navigate(button?.route)}>{ button.name }</motion.button>
          )
        }
      </nav>
    </StyledList>
  )
}

export default List
