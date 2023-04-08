import BankModals from "./bank.modal";
import UserModals from "./user.modal";
import CodeModals from "./code.modal";
import OrderModals from "./order.modal";
import PreferenceModals from "./preference.modal";
import AddressModals from "./address.modal";
import ImageModal from "./image";

const Modals = () => (
    <>
      <CodeModals/>
      <UserModals/>
      <PreferenceModals/>
      <BankModals/>
      <OrderModals/>
      <AddressModals/>
      <ImageModal/>
    </>
)

export default Modals;
