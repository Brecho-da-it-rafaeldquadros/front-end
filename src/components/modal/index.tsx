import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { toast } from "react-toastify";
import { ISchema } from "yup";
import { IKeyOpenModal, useModal } from "../../context/modal.context";
import Icons from "../../services/icons/icons";
import { options } from "../../services/toast";
import { Background, ModalBaseBlock, Scroll } from "./style";
import { memo } from "react";

interface IPropsModal {
  keyOpenModal: IKeyOpenModal;
  components: (form: UseFormReturn<FieldValues, any>, setDataModal: React.Dispatch<React.SetStateAction<object>>) => ReactNode;
  nameModal: string;
  onSubmit?: (obj: any) => Promise<string>;
  schema?:ISchema<any>
  maxWidth?:string
  disableAutoClose?:boolean
}

const ModalBase = (props: IPropsModal) => {
  const {  setIsOpenModal, setData, setId } = useModal();
  const [ dataModal, setDataModal ] = useState<object>({} as any)

  const form = useForm( props?.schema ?
  { resolver:yupResolver(props?.schema) } 
  : {}
  );

  const autoClose = () => {
    setIsOpenModal(undefined)
    setData(undefined)
    setId(undefined)
  }

  const send = async (data: object) => {
    
    const toastID = toast.loading("Verificando", options)

    try {
      // @ts-ignore
      const message = await props.onSubmit({...data, ...dataModal} as object);

      toast.update(toastID, {render: message, type: "success", isLoading: false, ...options }) 

      if( !props?.disableAutoClose )  autoClose()
    
    } catch (error:any) {
      toast.update(toastID, {render: error.message, type: "error", isLoading: false, ...options }) 
    }
  };

  return (
    <Scroll
      maxWidth={props.maxWidth}
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
    >
      <ModalBaseBlock>
        <>
          <div className="modal__header">
            <h2 className="header__name_modal">
              {props.nameModal.toUpperCase()}
            </h2>

            <button
              className="header__close"
              onClick={() => setIsOpenModal(undefined)}
            >
              <Icons.Close/>
            </button>
          </div>
          <form autoComplete="false" onSubmit={form.handleSubmit(props?.onSubmit ? send : () => {})}>
            {props.components( form, setDataModal )}
          </form>
        </>
      </ModalBaseBlock>
    </Scroll>
  );
};

const BackgroundBlock = (props: IPropsModal) => {
  return (
    <Background
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(1.5px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      id="background"
    >
      <ModalBase { ...props } />
    </Background>
  );
};

const Modal = (props: IPropsModal) => {
  const { isOpenModal } = useModal();

  const isEqualOpenModal = isOpenModal === props.keyOpenModal;

  return (
    <>
      <AnimatePresence>
        {isEqualOpenModal && <BackgroundBlock {...props} />}
      </AnimatePresence>
    </>
  );
};

export default memo(Modal);
