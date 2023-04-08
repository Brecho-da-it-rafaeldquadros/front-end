import Button from "../components/button";
import Input from "../components/input";
import Modal from "../components/modal";
import { useModal } from "../context/modal.context";
import { useRequest } from "../context/request.context";
import { updateMyDataBrankRequest } from "../services/api/bank/request.bank";
import { schemaBankData, schemaListDataBank } from "../validations/dataBank.validation";

const BankModals = () => {

  const { setIsOpenModal, setData, data, setId, id } = useModal()
  const { listOneDataBrankRequest, deleteMyDataBrankRequest, createMyDataBrankRequest } = useRequest()

  return (
  <>
    <Modal
      keyOpenModal="ModalDeleteDataBank"
      nameModal="DADOS BANCÁRIOS"
      onSubmit={ async ( data:any ) => { 
                
        const sucess = await deleteMyDataBrankRequest()

        setData(undefined)

        return sucess.message
      }}
      components={( { register, formState:{ errors }}, setDataModal )=>(
        <>    
          <Button type="submit" color="red" size="medium">
            Remover
          </Button>
        </>
      )}
    />

    <Modal
      keyOpenModal="ModalInsertDataBank"
      schema={schemaBankData}
      nameModal="DADOS BANCÁRIOS"
      disableAutoClose
      onSubmit={ async ( data:any ) => { 

        const sucess = await createMyDataBrankRequest({ data })

        setData(sucess)
        setIsOpenModal(undefined)
        
        return sucess.message
      }}  
      components={( { register, formState:{ errors }}, setDataModal )=>(
        <>    
         <Input
              placeholder="CPF"
              name="cpf"
              message={ errors?.cpf ? errors?.cpf?.message as string : undefined }
              type="password"
              iconposition='right'
            
              register={ register}
              maxwidth="100%"
            />
            <Input
              placeholder="Número da conta"
              name="accountNumber"
              message={ errors?.accountNumber ? errors?.accountNumber?.message as string : undefined }
              type="password"
              iconposition='right'
           
              register={ register}
              maxwidth="100%"
            />
            <Input
              placeholder="Agência"
              name="agency"
              message={ errors?.agency ? errors?.agency?.message as string : undefined }
              type="password"
              iconposition='right'
      
              register={ register}
              maxwidth="100%"
            />
            <Input
              placeholder="Chave PIX"
              name="pix"
              message={ errors?.pix ? errors?.pix?.message as string : undefined }
              type="password"
              iconposition='right'
          
              register={ register}
              maxwidth="100%"
            />

          <Button type="submit" color="blue" size="medium">
            Adicionar
          </Button>
        </>
      )}
    />

    <Modal
      keyOpenModal="ModalUpdateDataBank"
      schema={schemaBankData}
      nameModal="DADOS BANCÁRIOS"
      disableAutoClose
      onSubmit={ async ( data:any ) => { 

        const sucess = await updateMyDataBrankRequest({ data })

        setData(sucess)
        setIsOpenModal(undefined)
        setId(undefined)
        
        return sucess.message
      }}  
      components={( { register, formState:{ errors }}, setDataModal )=>(
        <>    
         <Input
              placeholder="CPF"
              name="cpf"
              message={ errors?.cpf ? errors?.cpf?.message as string : undefined }
              defaultvalue={data?.cpf ? data?.cpf : ""}
              type="password"
              iconposition='right'
            
              register={ register}
              maxwidth="100%"
            />
            <Input
              placeholder="Número da conta"
              name="accountNumber"
              message={ errors?.accountNumber ? errors?.accountNumber?.message as string : undefined }
              type="password"
              iconposition='right'
              defaultvalue={data?.accountNumber ? data?.accountNumber : ""}
              register={ register}
              maxwidth="100%"
            />
            <Input
              placeholder="Agência"
              name="agency"
              message={ errors?.agency ? errors?.agency?.message as string : undefined }
              type="password"
              iconposition='right'
              defaultvalue={data?.agency ? data?.agency : ""}
              register={ register}
              maxwidth="100%"
            />
            <Input
              placeholder="Chave PIX"
              name="pix"
              message={ errors?.pix ? errors?.pix?.message as string : undefined }
              type="password"
              iconposition='right'
              defaultvalue={data?.pix ? data?.pix : ""}
              register={ register}
              maxwidth="100%"
            />

          <Button type="submit" color="gold" size="medium">
            Atualizar
          </Button>
        </>
      )}
    />

    <Modal
      keyOpenModal="ModalAuthorizationDataBank"
      nameModal="AUTENTICAÇÃO"
      schema={schemaListDataBank}
      disableAutoClose
      onSubmit={ async ( auth:any ) => { 
                
        const success = await listOneDataBrankRequest( id ? { auth, userId:id! } : { auth } )

        setData( success )

        setIsOpenModal(undefined)

        return success.message
      }}  
      components={( { register, formState:{ errors }}, setDataModal )=>(
        <>    
          <Input
              placeholder="Senha"
              name="password"
              message={ errors?.code ? errors?.code?.message as string : undefined }
              type="password"
              iconposition="right"
              register={ register}
              maxwidth="100%"
          />
          <Button type="submit" color="gold" size="medium">
            Entrar
          </Button>
        </>
      )}
    />
  </>
)}

export default BankModals;
