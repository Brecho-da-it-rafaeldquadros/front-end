import { StyledStage } from './style'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { useLocation } from 'react-router-dom'

interface IPropsStage {
  name:string
  SVG:IconType
  colorIncludesName:string
}

const Stage = ( props:IPropsStage ) => {

  const { pathname } = useLocation()

  const isPage = pathname.includes( props.colorIncludesName )

  return (
    <StyledStage
      isPage={isPage}
      style={{ 
        background:isPage ? "#FFF5D9" : "transparent",
      }}
    >
      <props.SVG size={25}/>
      <motion.span>
          { props.name }
      </motion.span>
    </StyledStage>
  )
}

export default Stage
