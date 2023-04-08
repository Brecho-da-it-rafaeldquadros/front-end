import { createContext, ReactNode, useContext, useState } from "react";

interface IModalContext {
  id?: string;
  setId: Function;
  isOpenModal: IKeyOpenModal;
  setIsOpenModal: React.Dispatch<React.SetStateAction<IKeyOpenModal>>;
  data?: any;
  setData: Function;
  clearStates: Function;
}

export type IKeyOpenModal =
  | "modalOpen"
  | "modalClose"
  | "ModalCreateCategory"
  | "ModalDeleteCategory"
  | "ModalEditeCategory"
  | "ModalCreateBrand"
  | "ModalDeleteBrand"
  | "ModalEditeBrand"
  | "ModalUpdateImageBrand"
  | "ModalCreateProduct"
  | "ModalDeleteProduct"
  | "ModalConfirmSmsRetrieveAccount"
  | "ModalConfirmEmailCreateUser"
  | "ModalConfirmSmsCreateUser"
  | "ModalAddTrackingOrder"
  | "ModalUpdatePasswordUser"
  | "ModalDeactivateUser"
  | "ModalAutenticationUpdateUser"
  | "ModalConfirmCodeUpdateUserSMS"
  | "ModalConfirmCodeUpdateUserEmail"
  | "ModalDeletePreference"
  | "ModalDeleteDataBank"
  | "ModalCreateAddress"
  | "ModalUpdateAddress"
  | "ModalDeleteAddress"
  | "ModalAuthorizationDataBank"
  | "ModalInsertDataBank"
  | "ModalCreatePreference"
  | "ModalUpdatePreference"
  | "ModalUpdateDataBank"
  | "ModalCreateUser"
  | "ModalAutenticationUpdatePasswordUser"
  | "ModalConfirmSmsUpdateUser"
  | "ModalUpdateUser"
  | "ModalAutenticationActivateUser"
  | "ModalAutenticationCreateUser"
  | "ModalEditeProduct"
  | "ModalUpdateImageProduct"
  | "ModalCreateUserAdmin"
  | "ModalAutenticationCreateUserAdmin"
  | "ModalViewImage"
  | undefined;

interface IModalProps {
  children: ReactNode;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: IModalProps) => {
  const [isOpenModal, setIsOpenModal] = useState<IKeyOpenModal>(
    undefined as IKeyOpenModal
  );
  const [id, setId] = useState<string | undefined>(undefined);
  const [data, setData] = useState<any | undefined>(undefined);

  const clearStates = () => {
    setIsOpenModal(undefined);
    setId(undefined);
    setData(undefined);
    setIsOpenModal(undefined);
  };

  return (
    <ModalContext.Provider
      value={{
        id,
        setId,
        isOpenModal,
        setIsOpenModal,
        data,
        setData,
        clearStates,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
