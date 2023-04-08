import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import { IDataResponseListDeliveryInAddressRequest } from "../services/api/address/interface.address"
import { IResponseListMyBagRequest } from "../services/api/bag/interface.bag"
import { formatTime, getCurrentDateMileseconds, transformDateInMileseconds } from "../services/methods"
import { useRequest } from "./request.context"

interface IBagContext {
    myBag:IResponseListMyBagRequest
    setMyBag:React.Dispatch<React.SetStateAction<IResponseListMyBagRequest>>
    timeCler:string
    setValidAt:React.Dispatch<React.SetStateAction<number>>
    delivery:IDataResponseListDeliveryInAddressRequest
    setDelivery:React.Dispatch<React.SetStateAction<IDataResponseListDeliveryInAddressRequest>>
    addressId:string
    setAddressId:React.Dispatch<React.SetStateAction<string>>
    setTimerCler:React.Dispatch<React.SetStateAction<string>>
    timeoutId:NodeJS.Timeout
    addProductIdInBag:(productId: string) => Promise<void>
    returnMessage:( time:number ) => void
}

interface IBagProps {
    children: ReactNode
}

const BagContext = createContext<IBagContext>({} as IBagContext)

export const BagProvider = ({ children }:IBagProps) => {

    const { pathname } = useLocation()

    const [ delivery, setDelivery ] = useState<IDataResponseListDeliveryInAddressRequest>({} as IDataResponseListDeliveryInAddressRequest)
    const [ addressId, setAddressId ] = useState("")

    const [ myBag, setMyBag ] = useState<IResponseListMyBagRequest>({} as IResponseListMyBagRequest)
    const [ validAt, setValidAt ] = useState(0)
    const [ timeCler, setTimerCler ] = useState("00:00")
    const [ timeoutId, setTimeoutId ] = useState<NodeJS.Timeout>(0 as any)

    const { listMyBagRequest, addProductInBagRequest } = useRequest()

    async function addProductIdInBag( productId:string ){
        try {
            const success = await addProductInBagRequest({ productId:productId! })
            toast.success(success.message)

            clearTimeout(timeoutId)

            const sucess = await listMyBagRequest()
            setMyBag( sucess )

            setValidAt(transformDateInMileseconds(sucess?.bag?.validAt))
            
        } catch (error:any) {
            toast.error(error.message)
        }
    }

    async function returnMessage(time:number){
        if( time <= 0 ){
            setMyBag({} as IResponseListMyBagRequest)
            setValidAt(0)
            setTimerCler("00:00")
            clearTimeout(timeoutId)
        }

        if( myBag?.bag?.id && time >= 0 && validAt && validAt > 0 ){
            setTimerCler( formatTime(time ) )

            const currentAt = getCurrentDateMileseconds() 

            clearTimeout(timeoutId)
            const id = setTimeout(()=>{

                returnMessage(validAt - currentAt)
                
            },1000)

            setTimeoutId(id)
        }
    }

    useEffect(()=>{
        if(validAt > 0){
            const currentAt = getCurrentDateMileseconds() 

            returnMessage(validAt - currentAt)
        }
    },[validAt])

    useEffect(()=>{
        (async()=>{
            
            const isBagPage = pathname.includes("carrinho")

            if(!isBagPage){
                const sucess = await listMyBagRequest()
                setMyBag( sucess )

                setValidAt(transformDateInMileseconds(sucess?.bag?.validAt))
            }
        })()
    },[])

    return (
        <BagContext.Provider
            value={{
                myBag,
                setMyBag,
                timeCler,
                setValidAt,
                delivery,
                setDelivery,
                addressId,
                setAddressId,
                setTimerCler,
                timeoutId,
                addProductIdInBag,
                returnMessage
            }}
        >
            { children }
        </BagContext.Provider>
    )
}

export const useBag = () => useContext(BagContext)