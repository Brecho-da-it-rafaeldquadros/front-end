import { useEffect, useState } from 'react'
import { Ball, StyledSwitch } from './style'
import { v4 as uuid } from "uuid"

interface IPropsSwitch {
  register?:any
  name?:string
  onChange?:( check:boolean ) => void
  position?: "center" | "flex-end" | "flex-start"
  maxwidth?:string
  default?:boolean
  margin?:string
  title?:string
}

const Switch = ( props:IPropsSwitch ) => {
  const [ isActive, setIsActive ] = useState( false )

  useEffect(()=>{
    if( props?.default === ( false || true )){
      setIsActive( props?.default  )
    }
  },[props?.default])

  const uniqueID = `switch-${uuid()}`

  return (
    <StyledSwitch
      position={props?.position}
      maxwidth={props?.maxwidth}
      margin={props?.margin}
      title={props?.title}
    > 
      <h4>
        { props?.title }
      </h4>
      <input checked={isActive} type="checkbox" {...props.register&&props.register(props.name)} className='disable' id={uniqueID} onClick={()=>{
        setIsActive(!isActive)
        props.onChange&&props.onChange(!isActive)
      }}/>
      <label htmlFor={uniqueID}>
        <Ball
          initial={{ x:isActive ? "0px" : "20px", background: isActive ? "#ee32328a" : "#1c5bd482" }}
          animate={{ x:isActive ? "20px" : "0px", background: isActive ? "#1c5bd482" : "#ee32328a" }}
        />
      </label>
    </StyledSwitch>
  )
}

export default Switch
