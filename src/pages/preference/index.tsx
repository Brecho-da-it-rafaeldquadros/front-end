import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../components/button'
import CardExtend from '../../components/cardExtend'
import Found from '../../components/found'
import Switch from '../../components/switch'
import { useAuth } from '../../context/auth.context'
import { useModal } from '../../context/modal.context'
import { useRequest } from '../../context/request.context'
import { IResponseListBrandsRequest } from '../../services/api/brand/interface.brand'
import { IResponseListCategoryRequest } from '../../services/api/category/interface.category'
import { IResponseListOnePreferenceRequest } from '../../services/api/preference/interface.preference'
import Icons from '../../services/icons/icons'
import { ModeADM } from '../orders/style'
import { StyledPreference, Header, Footer } from './style'

const Preference = () => {

  const { userId } = useParams()
  const navigate = useNavigate()

  const { setIsOpenModal, isOpenModal, setData } = useModal()
  const { 
    listCategoryRequest, 
    listBrandsRequest, 
    listOnePreferenceRequest , 
    updateMyPreferenceRequest
  } = useRequest()

  const [ categories, setCategories ] = useState<IResponseListCategoryRequest>({} as IResponseListCategoryRequest)
  const [ brands, setBrands ] = useState<IResponseListBrandsRequest>({} as IResponseListBrandsRequest)
  const [ { preference }, setPreferences ] = useState<IResponseListOnePreferenceRequest>({} as IResponseListOnePreferenceRequest)
  const { getUserStorgeOrRedirectAndRequired } = useAuth()
  const { clearStates } = useModal()

  const listNamesCategories = categories?.categories?.map( categoty => categoty?.name )
  const listNamesBrands = brands?.brands?.map( brand => brand?.name )

  const hasPreference = preference?.id

  useEffect(()=>{
    (async()=>{
      try {
        await getUserStorgeOrRedirectAndRequired( { requerid:true } )

        const sucessCategories = await listCategoryRequest()
        setCategories(sucessCategories)  

        const sucessBrands = await listBrandsRequest()
        setBrands(sucessBrands)  

        const sucessPreference = await listOnePreferenceRequest( userId ? { userId } : {} )
        setPreferences(sucessPreference)  
      } catch (error:any) {
        toast.error(error.message)
        navigate("/")
      }
    })()
  },[isOpenModal])

  useEffect(()=> ()=> { clearStates() },[])

  const alterActivePreference = async ( check:boolean ) => {
    try {
      await updateMyPreferenceRequest( { data:{ isActive:check } } )
      
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  const foundDataBank = !preference?.id

  return (
    <StyledPreference>
      <div className='preference__header'>

        <h2 className='preference_title'>
          <Icons.Preference/>
          <ModeADM>

            PREFERÊNCIAS
            {userId&&<p>MODO ADMIN</p>}

          </ModeADM> 
        </h2>

      </div>

      {foundDataBank&&
        <Found
          headerText="NENHUM PREFERÊNCIA CADASTRADA"
          bodyText="QUE TAL ADICIONAR ALGUMAS PREFERÊNCIAS?"
          footerText="Com uma preferência cadastrada poderá encontrar produtos mais próximo do seu gosto!"
          modeADM={!!userId}
          onClick={()=>{ 
            setIsOpenModal("ModalCreatePreference")
            setData({
              categories:listNamesCategories,
              brands:listNamesBrands
              })
          }}
        />
      }

      <AnimatePresence>

        {hasPreference&&
          <CardExtend
            disableExtend
            key={hasPreference}
            sessions={[
              {
                "Calçado":preference?.shoeSize,
                "Roupa":preference?.clothingSize,
                "Bolsa":preference?.handBagSize,
              },
              {
                "Cor":preference?.color,
                "Categoria":preference?.category?.name,
                "Marca": preference?.brand?.name
              }
            ]}
            header={
              <Header>
                {userId ?

                  <h3>INFORMAÇÕES</h3> 

                :

                  <Switch
                    onChange={( check )=>alterActivePreference(check)}
                    default={preference?.isActive}
                    title="ATIVO"
                    margin='0px'
                  />

                }
              </Header>
            }
            footer={
              <Footer>
                {!userId&&
                  <>
                    <Button margin='30px 10px' type="button" color="gold" size="small" onclick={()=>{
                      setIsOpenModal("ModalUpdatePreference")
                      setData({
                        categories:listNamesCategories,
                        brands:listNamesBrands,
                        default:preference
                      })
                    }}>
                      <Icons.Edit size={25}/>
                    </Button>
                    <Button margin='30px 10px' type="button" color="red" size="small" onclick={()=>{
                      setIsOpenModal("ModalDeletePreference")
                    }}>
                      <Icons.Trash size={25}/>
                    </Button>
                  </>
                }
              </Footer>
            }
          />
        }
      </AnimatePresence>
    </StyledPreference>
  )
}

export default Preference
