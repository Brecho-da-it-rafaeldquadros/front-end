import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icons from '../../services/icons/icons'
import Error from '../error'
import { StyledCheckBox, Input, Label, LinkStyled, CheckBoxBlock } from './style'

interface IPropsCheckbox{
  register?:any
  name?:string
  text:string
  linkname?:string
  link?:string
  target?:React.HTMLAttributeAnchorTarget
  message?: string
  onChange?:( check:boolean ) => void
  onClick?:Function 
  idkey?:string
  checked?:boolean
  removeCheck?:boolean
  oltherSite?:boolean
  position?: "left" | "center" | "right"
}

const CheckBox = ( props:IPropsCheckbox ) => {

  const navigate = useNavigate()
  const [ isCheck, setIsCheck ] = useState( props?.checked ? props?.checked : false )

  const uniqueid = `checkbox${props?.idkey?.replaceAll("-", "")}`

  return (
    <StyledCheckBox
      id="checkbox"
      position={props?.position}
    >
      <Input 
        className='block__checkbox' 
        type='checkbox' 
        id={uniqueid}
        checked={isCheck}
        onChange={( e:any )=>{
          setIsCheck( e.target.checked )
          
          props?.onChange&&props?.onChange( e.target.checked )
        }}
        {...props?.register&&props?.register(props?.name, {
          onChange: ( e:any ) => {

            setIsCheck( e.target.checked )

            props?.onChange&&props?.onChange( e.target.checked )

            return e.target.checked
          }
        })}
        
      />
      <CheckBoxBlock 
        removeCheck={props.removeCheck}
        htmlFor={uniqueid}
        ischeck={ isCheck }
      >
        <Icons.Check/>
      </CheckBoxBlock>
      <Label 
        className='block__checkbox_name' 
        htmlFor={uniqueid}
     
      >
        {props.text}
      </Label>
      {props?.linkname&&
        <LinkStyled 
          type="button"
          onClick={()=>{
            props.onClick&&props.onClick()

            if( props.oltherSite ){
              
              props?.link&&window.open(props?.link)
            }else{
              props?.link&&navigate(props?.link)
            }
          }}
        >
          {props?.linkname.toUpperCase()}
        </LinkStyled>
      }
      {props?.message&&
        <Error message={ props?.message }/>
      }
    </StyledCheckBox>
  )
}

export default CheckBox
