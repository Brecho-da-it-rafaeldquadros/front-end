import Button from "../components/button";
import CheckBox from "../components/checkBox";
import Input from "../components/input";
import Modal from "../components/modal";
import TextArea from "../components/textArea";
import { useModal } from "../context/modal.context";
import { useRequest } from "../context/request.context";
import { addressUpdateUserLevelOne, addressUserLevelOne } from "../validations/address.validation";

const AddressModals = () => {
  const { data, id } = useModal();
  const { createMyAddressRequest, deleteMyAddressRequest, updateMyAddressRequest } = useRequest()

  return (
    <>
      <Modal
        keyOpenModal="ModalCreateAddress"
        nameModal="ENDEREÇO"
        schema={addressUserLevelOne}
        onSubmit={ async ( data:any ) => { 

          const success = await createMyAddressRequest({ data })

          return success.message 
        }}
        components={( { register, formState:{ errors }}, setDataModal )=>(
          <>    
            <Input
              placeholder="Apelido"
              name="name"
              message={ errors?.name ? errors?.name?.message as string : undefined }
              type="text"
              register={ register}
              maxwidth="100%"
            />
            <Input
              placeholder="CEP"
              name="cep"
              message={ errors?.cep ? errors?.cep?.message as string : undefined }
              type="text"
              register={ register}
              maxwidth="100%"
            />
            <CheckBox
              text="Não sabe seu CEP?"
              linkname="CONSULTAR"
              link="https://buscacepinter.correios.com.br/app/endereco/index.php?t"
              oltherSite
              removeCheck
              position="center"
              idkey="1"
            />
            <Input
              placeholder="Número"
              name="number"
              message={ errors?.number ? errors?.number?.message as string : undefined }
              type="text"
              register={ register}
              maxwidth="100%"
            />
            <TextArea
              placeholder="Complemento"
              name="complement"
              message={ errors?.complement ? errors?.complement?.message as string : undefined }
              register={ register}
              maxwidth="100%"
            />
            {data?.authorizationLevel === 1&&
              <CheckBox
                register={register}
                name="isCompanyAddress"
                text="Empresa"
                idkey="2"
                message={ errors?.isCompanyAddress ? errors?.isCompanyAddress?.message as string : undefined }
              />
            }
            <CheckBox
              register={register}
              name="isDefault"
              text="Padrão"
              idkey="3"
              message={ errors?.isDefault ? errors?.isDefault?.message as string : undefined }
            />
            <Button type="submit" color="blue" size="medium">
              Adicionar
            </Button>
          </>
        )}
      />

      <Modal
        keyOpenModal="ModalUpdateAddress"
        nameModal="ENDEREÇO"
        schema={addressUpdateUserLevelOne}
        onSubmit={ async ( data:any ) => { 

          console.log( data )

          const success = await updateMyAddressRequest({ data, addressId:id! })

          return success.message
        }}
        components={( { register, formState:{ errors }}, setDataModal )=>(
          <>    
            <Input
              placeholder="Apelido"
              name="name"
              message={ errors?.name ? errors?.name?.message as string : undefined }
              type="text"
              defaultvalue={ data.address.name }
              register={ register}
              maxwidth="100%"
            />
            <Input
              placeholder="CEP"
              name="cep"
              message={ errors?.cep ? errors?.cep?.message as string : undefined }
              type="text"
              defaultvalue={ data.address.cep }
              register={ register}
              maxwidth="100%"
            />
            <CheckBox
              text="Não sabe seu CEP?"
              linkname="CONSULTAR"
              link="https://buscacepinter.correios.com.br/app/endereco/index.php?t"
              oltherSite
              removeCheck
              position="center"
              idkey="1"
            />
            <Input
              placeholder="Número"
              name="number"
              message={ errors?.number ? errors?.number?.message as string : undefined }
              type="text"
              defaultvalue={ data.address.number }
              register={ register}
              maxwidth="100%"
            />
            <TextArea
              placeholder="Complemento"
              name="complement"
              defaultvalue={ data.address.complement }
              message={ errors?.complement ? errors?.complement?.message as string : undefined }
              register={ register}
              maxwidth="100%"
            />
            {data.user.authorizationLevel === 1&&
              <CheckBox
                register={register}
                name="isCompanyAddress"
                text="Empresa"
                checked={ data.address.isCompanyAddress }
                idkey="4"
                message={ errors?.isCompanyAddress ? errors?.isCompanyAddress?.message as string : undefined }
              />
            }
            <CheckBox
              register={register}
              name="isDefault"
              text="Padrão"
              checked={ data.address.isDefault }
              idkey="7"
              message={ errors?.isDefault ? errors?.isDefault?.message as string : undefined }
            />
            <Button type="submit" color="gold" size="medium">
              Atualizar
            </Button>
          </>
        )}
      />

      <Modal
        keyOpenModal="ModalDeleteAddress"
        nameModal="ENDEREÇO"
        onSubmit={ async () => { 
                
          await deleteMyAddressRequest({ addressId:id! })

          return "Endereço removido" }}
        components={( { register, formState:{ errors }}, setDataModal )=>(
          <>    
            <Button type="submit" color="red" size="medium">
              Remover
            </Button>
          </>
        )}
      />
    </>
  );
};

export default AddressModals;
