import Button from "../components/button";
import Input from "../components/input";
import Modal from "../components/modal";
import { useMenu } from "../context/menu.context";
import { useModal } from "../context/modal.context";
import {
  createCategoryRequest,
  deleteCategoryRequest,
  listCategoryRequest,
  updateCategoryRequest,
} from "../services/api/category/request.category";
import { schemaCreateCategory } from "../validations/category.validation";

export const ModalCreateCategory = () => {
  const { setCategories } = useMenu();
  const { setId } = useModal();
  return (
    <Modal
      keyOpenModal="ModalCreateCategory"
      nameModal="Criar categoria"
      schema={schemaCreateCategory}
      onSubmit={async (data: any) => {
        const response = await createCategoryRequest({ data });
        const category = await listCategoryRequest();
        setCategories(category.categories);

        return "Categoria criada com sucesso";
      }}
      components={({ register, formState: { errors } }, setDataModal) => (
        <>
          <Input
            placeholder="Name"
            name="name"
            message={
              errors?.name ? (errors?.name?.message as string) : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
          />

          <Button type="submit" color="gold" size="medium">
            Criar
          </Button>
        </>
      )}
    />
  );
};

const ModalDeleteCategory = () => {
  const { setCategories } = useMenu();
  const { id } = useModal();
  return (
    <Modal
      keyOpenModal="ModalDeleteCategory"
      nameModal="Remover Categoria?"
      onSubmit={async (data: any) => {
        const category = await listCategoryRequest();
        setCategories(category.categories);

        return "Categoria deletada com sucesso";
      }}
      components={({ register, formState: { errors } }, setDataModal) => (
        <>
          <Button
            onclick={async () => {
              const categoryId = localStorage.idCategory;
              await deleteCategoryRequest({ categoryId });
              const category = await listCategoryRequest();
              setCategories(category.categories);
            }}
            type="submit"
            color="red"
            size="medium"
          >
            Remover
          </Button>
        </>
      )}
    />
  );
};
export default ModalDeleteCategory;

export const ModalEditeCategory = () => {
  const { setCategories } = useMenu();
  const { id, data } = useModal();
  return (
    <Modal
      keyOpenModal="ModalEditeCategory"
      nameModal="Editar Categoria?"
      onSubmit={async (data: any) => {
        const response = await updateCategoryRequest({ data });
        const category = await listCategoryRequest();
        setCategories(category.categories);

        return "Categoria editada com sucesso";
      }}
      components={({ register, formState: { errors } }, setDataModal) => (
        <>
          <Input
            placeholder="Name"
            name="name"
            message={
              errors?.name ? (errors?.name?.message as string) : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
            defaultvalue={data}
          />
          <Button type="submit" color="gold" size="medium">
            Editar
          </Button>
        </>
      )}
    />
  );
};
