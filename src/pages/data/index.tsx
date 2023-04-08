import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../components/button'
import CardExtend from '../../components/cardExtend'
import Found from '../../components/found'
import { useAuth } from '../../context/auth.context'
import { useModal } from '../../context/modal.context'
import { IResponseListOneDataBankRequest } from '../../services/api/bank/interface.bank'
import Icons from '../../services/icons/icons'
import { ModeADM } from '../orders/style'
import { StyledData, Header, Footer } from './style'

const Data = () => {

  const { userId } = useParams()

  const { setIsOpenModal, setData, data, isOpenModal, clearStates, setId } = useModal()
  const { getUserStorgeOrRedirectAndRequired } = useAuth()

  const [ databank, setDataBank ] = useState<IResponseListOneDataBankRequest>({} as IResponseListOneDataBankRequest)

  let hasDataBank = databank?.bank?.id

  useEffect(()=>{
    (async()=>{
      setId(userId)
      setIsOpenModal("ModalAuthorizationDataBank")

      await getUserStorgeOrRedirectAndRequired( { requerid:true } )
    })()   
    return () => {
      clearStates()
    }
  },[])

  useEffect(()=>{
    setDataBank( data )
  },[isOpenModal])

  const foundDataBank = !databank?.bank?.id

  return (
    <StyledData>
        <div className='data__header'>

          <h2 className='order_title'>
            <Icons.Bank/>
            <ModeADM>

              DADOS BANCÁRIOS
              {userId&&<p>MODO ADMIN</p>}

            </ModeADM> 
          </h2>

        </div>

        {foundDataBank&&
          <Found
            headerText="NENHUM INFORMAÇÃO BANCÁRIA CADASTRADA"
            bodyText="QUE TAL ADICIONAR INFORMAÇÕES BANCÁRIAS?"
            modeADM={!!userId}
            footerText=""
            onClick={()=>{ setIsOpenModal("ModalInsertDataBank") }}
          />
        }

        <AnimatePresence>

          {hasDataBank&&
            <CardExtend
              disableExtend
              key={hasDataBank}
              sessions={[
                {
                  "Pix":databank?.bank?.pix ? databank?.bank?.pix : "Não encontrado",
                  "CPF":databank?.bank?.cpf ? databank?.bank?.cpf : "Não encontrado",
                  "Número da conta":databank?.bank?.accountNumber ? databank?.bank?.accountNumber : "Não encontrado",
                  "Agência":databank?.bank?.agency ? databank?.bank?.agency : "Não encontrado" ,
                }
              ]}
              header={
                <Header>
                  <h3>INFORMAÇÕES</h3>
                </Header>
              }
              footer={
                <Footer>
                  {!userId&&
                    <>
                      <Button margin='30px 10px' type="button" color="gold" size="small" onclick={()=>{
                        setIsOpenModal("ModalUpdateDataBank")
                        setData(databank)
                      }}>
                        <Icons.Edit size={25}/>
                      </Button>
                      <Button margin='30px 10px' type="button" color="red" size="small" onclick={()=>{
                        setIsOpenModal("ModalDeleteDataBank")
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
    </StyledData>
  )
}

export default Data
