import { StyledSession } from './style'

interface IPropsSession {
  session:object
}

const Session = ( props:IPropsSession ) => {

  const list = Object.entries( props.session )

  return (
    <StyledSession>
        {
          list?.map( ([ key, value ]) =>
          <div className='session__block'>
            <p className='block__key'>{key.toUpperCase()}</p>
            <p className='block__value'>{value}</p>
          </div>  
        )
        }
    </StyledSession>
  )
}

export default Session
