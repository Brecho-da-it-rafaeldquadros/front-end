import Button from "../components/button";
import File from "../components/file";
import Input from "../components/input";
import Modal from "../components/modal";
import { useMenu } from "../context/menu.context";
import { useModal } from "../context/modal.context";
import {
  createBrandRequest,
  deleteBrandRequest,
  listBrandsRequest,
  updateBrandRequest,
  updateImageBrandRequest,
} from "../services/api/brand/request.brand";

import {
  schemaCreateBrand,
  schemaUpdateImageBrand,
} from "../validations/brands.validation";

export const ModalCreateBrands = () => {
  const { setBrands } = useMenu();
  return (
    <Modal
      keyOpenModal="ModalCreateBrand"
      nameModal="Criar nova marca"
      schema={schemaCreateBrand}
      onSubmit={async (data: any) => {
        const teste = Object.entries(data.files).map((file) => file[1]);

        delete data.files;
        data.sizeTable = teste[0];
        const response = await createBrandRequest({ data });
        const brands = await listBrandsRequest();
        setBrands(brands.brands);
        return "Marca criada com sucesso";
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

          <File
            multiple={1}
            onChange={(files) =>
              setDataModal((data) => {
                return { ...data, files };
              })
            }
          />

          <Button type="submit" color="gold" size="medium">
            Criar
          </Button>
        </>
      )}
    />
  );
};

export const ModalDeleteBrand = () => {
  const { setBrands } = useMenu();
  return (
    <Modal
      keyOpenModal="ModalDeleteBrand"
      nameModal="Remover marca?"
      onSubmit={async (data: any) => {
        return "Marca deletada com sucesso";
      }}
      components={({ register, formState: { errors } }, setDataModal) => (
        <>
          <Button
            onclick={async () => {
              const brandId = localStorage.idBrand;
              await deleteBrandRequest({ brandId });
              const brands = await listBrandsRequest();
              setBrands(brands.brands);
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

export const ModalEditeBrand = () => {
  const { setBrands } = useMenu();
  const { data } = useModal();
  return (
    <Modal
      keyOpenModal="ModalEditeBrand"
      nameModal="Editar marca?"
      onSubmit={async (data: any) => {
        const brandId = localStorage.idBrand;
        const response = await updateBrandRequest({ data, brandId });

        const brands = await listBrandsRequest();
        setBrands(brands.brands);
        return "Marca criada com sucesso";
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

export const ModalUpdateImageBrands = () => {
  const { setBrands } = useMenu();
  return (
    <Modal
      keyOpenModal="ModalUpdateImageBrand"
      nameModal="Atualizar imagem da marca"
      schema={schemaUpdateImageBrand}
      onSubmit={async (data: any) => {
        const teste = Object.entries(data.files).map((file) => file[1]);

        delete data.files;
        data.sizeTable = teste[0];

        const response = await updateImageBrandRequest({ data });
        const brands = await listBrandsRequest();
        setBrands(brands.brands);
        return "Imagem da marca atualizada com sucesso";
      }}
      components={({ register, formState: { errors } }, setDataModal) => (
        <>
          <File
            multiple={1}
            onChange={(files) =>
              setDataModal((data) => {
                return { ...data, files };
              })
            }
          />

          <Button type="submit" color="gold" size="medium">
            Atualizar Imagem
          </Button>
        </>
      )}
    />
  );
};
