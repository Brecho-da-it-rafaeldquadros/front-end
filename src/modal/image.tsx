import Modal from "../components/modal";
import { useModal } from "../context/modal.context";

const ImageModal = () => {
  const { data } = useModal()

  return (
    <>
       <Modal
        keyOpenModal="ModalViewImage"
        nameModal="MARCA"
        onSubmit={ async () => ""}
        components={( form, setDataModal )=>( 
          <img src={ data?.imageURL } alt="Imagem com caracteristicas da imagem" />
        )}
      />
    </>
  )
}

export default ImageModal;
