import { useState } from "react";
import { TextAreaStyled, Label, Organization } from "./style";

interface IPropsTextArea {
    register?: any
    name?:string
    message?: string
    placeholder?: string
    defaultvalue?: string
    maxwidth?: string
}

const TextArea = ( { register, name, message, placeholder, defaultvalue, maxwidth }:IPropsTextArea ) => {

    const [ value, setValue ] = useState(defaultvalue ? defaultvalue : "")

    return (
        <Organization>
            {value&&<Label
                initial={{ opacity:0, y:"100%" }}
                animate={{ opacity:1, y:"1%"  }}
                message={message}
            >
                {message ? message : placeholder}
            </Label>}
            <TextAreaStyled
                maxwidth={maxwidth}
                value={ value }
                placeholder={message ? message : placeholder}
                {...register&&register(name, {
                    setValueAs: ( text:any ) => {setValue(text) 
                        return text
                    }
                })}
                message={message}  
            >

            </TextAreaStyled>
        </Organization>
    )
}

export default TextArea