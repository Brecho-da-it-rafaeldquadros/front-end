import { AnimatePresence } from 'framer-motion'
import Icons from '../../services/icons/icons'
import { ErrorStyled } from './style'

interface IPropsError {
  message:string
}

const Error = ( props:IPropsError ) => {
  return (
    <AnimatePresence>
      <ErrorStyled
        initial={{ opacity:0, y:"100%" }}
        animate={{ opacity:1, y:"1%"  }}
      >
        { props.message }
        <Icons.Error/>
      </ErrorStyled>
    </AnimatePresence>
  )
}

export default Error
