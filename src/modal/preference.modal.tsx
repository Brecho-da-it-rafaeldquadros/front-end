import Button from "../components/button";
import Input from "../components/input";
import Modal from "../components/modal";
import Select from "../components/select";
import { useModal } from "../context/modal.context";
import { useRequest } from "../context/request.context";

const PreferenceModals = () => {

  const { deleteMyPreferenceRequest, createMyPreferenceRequest, updateMyPreferenceRequest } = useRequest()
  const { data } = useModal()

  return (
    <>
      <Modal
        keyOpenModal="ModalDeletePreference"
        nameModal="PREFERÊNCIA"
        onSubmit={ async ( data:any ) => { 
                  
          const success = await deleteMyPreferenceRequest()

          return success.message 
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
        keyOpenModal="ModalCreatePreference"
        nameModal="PREFERÊNCIA"
        onSubmit={ async ( data:any ) => { 
                  
          const success = await createMyPreferenceRequest({ data })

          return success.message 
        }}
        components={( { register, formState:{ errors }}, setDataModal )=>(
          <>    
            <Select
              placeholder="Tamanho de calçado"
              name="shoeSize"
              message={ errors?.shoeSize ? errors?.shoeSize?.message as string : undefined }
              register={ register}
              maxwidth="100%"
              options={["PP", "P", "M", "G", "GG"]}
            />
            <Select
              placeholder="Tamanho de roupa"
              name="clothingSize"
              message={ errors?.clothingSize ? errors?.clothingSize?.message as string : undefined }
              register={ register}
              maxwidth="100%"
              options={["PP", "P", "M", "G", "GG"]}
            />
            <Select
              placeholder="Tamanho de bolsa"
              name="handBagSize"
              message={ errors?.handBagSize ? errors?.handBagSize?.message as string : undefined }
              register={ register}
              maxwidth="100%"
              options={["PP", "P", "M", "G", "GG"]}
            />
            <Input
              placeholder="Cor"
              name="color"
              message={ errors?.color ? errors?.color?.message as string : undefined }
              type="text"
              
              register={ register}
              maxwidth="100%"
            />
            <Select
              placeholder="Categoria"
              name="category"
              message={ errors?.category ? errors?.category?.message as string : undefined }
              register={ register}
              maxwidth="100%"
              options={data.categories}
            />
            <Select
              placeholder="Marca"
              name="brand"
              message={ errors?.brand ? errors?.brand?.message as string : undefined }
              register={ register}
              maxwidth="100%"
              options={data.brands}
            />
            <Button type="submit" color="blue" size="medium">
              Adicionar
            </Button>
          </>
        )}
      />

      <Modal
        keyOpenModal="ModalUpdatePreference"
        nameModal="PREFERÊNCIA"
        onSubmit={ async ( data:any ) => { 
                  
          const success = await updateMyPreferenceRequest({ data })

          return success.message 
        }}
        components={( { register, formState:{ errors }}, setDataModal )=>(
          <>    
            <Select
              placeholder="Tamanho de calçado"
              name="shoeSize"
              message={ errors?.shoeSize ? errors?.shoeSize?.message as string : undefined }
              register={ register}
              defaultoption={data?.default?.shoeSize}
              maxwidth="100%"
              options={["PP", "P", "M", "G", "GG"]}
            />
            <Select
              placeholder="Tamanho de roupa"
              name="clothingSize"
              message={ errors?.clothingSize ? errors?.clothingSize?.message as string : undefined }
              register={ register}
              defaultoption={data?.default?.clothingSize}
              maxwidth="100%"
              options={["PP", "P", "M", "G", "GG"]}
            />
            <Select
              placeholder="Tamanho de bolsa"
              name="handBagSize"
              message={ errors?.handBagSize ? errors?.handBagSize?.message as string : undefined }
              register={ register}
              defaultoption={data?.default?.handBagSize}
              maxwidth="100%"
              options={["PP", "P", "M", "G", "GG"]}
            />
            <Input
              placeholder="Cor"
              name="color"
              message={ errors?.color ? errors?.color?.message as string : undefined }
              type="text"
              defaultvalue={data?.default?.color}
              register={ register}
              maxwidth="100%"
            />
            <Select
              placeholder="Categoria"
              name="category"
              message={ errors?.category ? errors?.category?.message as string : undefined }
              defaultoption={ data?.default?.category?.name }
              register={ register}
              maxwidth="100%"
              options={data.categories}
            />
            <Select
              placeholder="Marca"
              name="brand"
              message={ errors?.brand ? errors?.brand?.message as string : undefined }
              defaultoption={ data?.default?.brand?.name }
              register={ register}
              maxwidth="100%"
              options={data.brands}
            />
            <Button type="submit" color="gold" size="medium">
              Atualizar
            </Button>
          </>
        )}
      />
    </>
)}

export default PreferenceModals;
