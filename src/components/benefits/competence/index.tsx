import { IconType } from 'react-icons'
import { StyledCompetence } from './style'

interface IPropsCompetence {
  icon:IconType
  title:string
  description:string
}

const Competence = ( props:IPropsCompetence ) => {
  return (
    <StyledCompetence>

      <props.icon/>

      <h4>{ props.title }</h4>

      <p>{ props.description }</p>

    </StyledCompetence>
  )
}

export default Competence
