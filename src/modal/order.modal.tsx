import Button from "../components/button";
import Input from "../components/input";
import Modal from "../components/modal";
import { useModal } from "../context/modal.context";
import { useRequest } from "../context/request.context";
import { IDataUpdateOrderRequest } from "../services/api/order/interface.order";
import { schemaUpdateOrder } from "../validations/order.validation";

const OrderModals = () => {
  const { data, id } = useModal();

  const { updateOrderRequest } = useRequest()

  return (
    <>
      <Modal
        keyOpenModal="ModalAddTrackingOrder"
        nameModal="ATUALIZAR PEDIDO"
        schema={ schemaUpdateOrder }
        onSubmit={ async ( data:IDataUpdateOrderRequest ) => { 
              
          const isDefaultCompany = data.companyTrackingAreaLink === "AGUARDANDO RASTREIO"
          const isDefaultCode = data.trackingCode === "AGUARDANDO RASTREIO"

          if( isDefaultCompany || isDefaultCode ){
            throw new Error("Deve inserir o código de ratreio e a URL so site")
          }

          const success = await updateOrderRequest({ data, orderId:id! })

          return success.message
        }}
        components={( { register, formState:{ errors }}, setDataModal )=>(
          <>    
            <Input
              placeholder="Código de rastreio"
              name="trackingCode"
              message={ errors?.trackingCode ? errors?.trackingCode?.message as string : undefined }
              type="text"
              register={ register}
              defaultvalue={ data.trackingCode ? data.trackingCode : "" }
              maxwidth="100%"
            />
            <Input
              placeholder="URL do site na aba de rastreio"
              name="companyTrackingAreaLink"
              message={ errors?.trackingCode ? errors?.trackingCode?.message as string : undefined }
              type="text"
              defaultvalue={ data.companyTrackingAreaLink ? data.companyTrackingAreaLink : "" }
              register={ register}
              maxwidth="100%"
            />
            <Button type="submit" color="gold" size="medium">
              Atualizar
            </Button>
          </>
        )}
      />
    </>
  );
};

export default OrderModals;
