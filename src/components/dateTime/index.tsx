import { Label, Organization, StyledDateTime } from './style'

interface IPropsDateTime extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  register?:any
  name?:string
  placeholder:string
  message?:string
}

const DateTime = ( props:IPropsDateTime ) => {
  return (
    <Organization>
      <Label message={props?.message}>{ props?.message ? props?.message : props?.placeholder }</Label>
      <StyledDateTime 
        type="datetime-local" 
        {...props?.register&&props?.register( props?.name ? props?.name : "")} 
        {...props as any}
      />
    </Organization>
  )
}

export default DateTime
