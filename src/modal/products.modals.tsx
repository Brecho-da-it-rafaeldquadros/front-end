import { useEffect, useState } from "react";
import Button from "../components/button";
import DateTime from "../components/dateTime";
import File from "../components/file";
import Input from "../components/input";
import { StyledImageUpdate } from "../components/listProducts/cardProducts/style";
import Modal from "../components/modal";
import Select from "../components/select";
import { useMenu } from "../context/menu.context";
import { useModal } from "../context/modal.context";
import { listBrandsRequest } from "../services/api/brand/request.brand";
import { listCategoryRequest } from "../services/api/category/request.category";
import {
  CreateProductRequest,
  deleteProductRequest,
  ListProductsAdminRequest,
  UpdateImageProductRequest,
  UpdateProductRequest,
} from "../services/api/products/request.products";
import { schemaCreateProduct } from "../validations/product.validation";
import noImage from "../assets/menuIcons/sem-foto-300x300.jpg";

export const ModalCreateProduct = () => {
  const { setProductsAdmin, setCategories, setBrands, page } = useMenu();
  const [categoriesNames, setCategoriesNames] = useState<Array<string>>([]);
  const [brandsNames, setBrandsNames] = useState<Array<string>>([]);

  useEffect(() => {
    (async () => {
      const brand = await listBrandsRequest();
      setBrands(brand.brands);
      setBrandsNames(brand.brands.map((element) => element.name));
    })();
    (async () => {
      const category = await listCategoryRequest();
      setCategories(category.categories);
      setCategoriesNames(category.categories.map((element) => element.name));
    })();
  }, []);

  return (
    <Modal
      keyOpenModal="ModalCreateProduct"
      nameModal="Criar novo produto"
      schema={schemaCreateProduct}
      onSubmit={async (data: any) => {
        const images = Object.entries(data.files).map((file) => file[1]);
        data.images = images[0];
        delete data.files;
        const response: any = await CreateProductRequest({ data });
        if (images[1]) {
          const image = { image: images[1] };
          const uploadImages = await UpdateImageProductRequest(
            image,
            "image_2",
            response.product.id
          );
        }
        if (images[2]) {
          const image = { image: images[2] };
          const uploadImages = await UpdateImageProductRequest(
            image,
            "image_3",
            response.product.id
          );
        }

        const products = await ListProductsAdminRequest(page);
        setProductsAdmin(products.result);
        return "Produto criado com sucesso";
      }}
      components={({ register, formState: { errors } }, setDataModal) => (
        <>
          <DateTime
            register={register}
            name="launchTime"
            placeholder="Data de lançamento"
            message={
              errors?.launcheTime
                ? (errors?.launcheTime?.message as string)
                : undefined
            }
          />
          <Input
            placeholder="Nome"
            name="name"
            message={
              errors?.name ? (errors?.name?.message as string) : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
          />
          <Input
            placeholder="Descrição"
            name="description"
            message={
              errors?.description
                ? (errors?.description?.message as string)
                : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
          />
          <Input
            placeholder="Cor"
            name="color"
            message={
              errors?.color ? (errors?.color?.message as string) : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
          />
          <Input
            placeholder="Preço do vendedor"
            name="priceSeller"
            message={
              errors?.priceSeller
                ? (errors?.priceSeller?.message as string)
                : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
          />
          <Input
            placeholder="Porcentagem de serviço, campo opcional"
            name="percentageService"
            message={
              errors?.percentageService
                ? (errors?.percentageService?.message as string)
                : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
          />
          <Select
            placeholder="Tamanho"
            name="size"
            message={
              errors?.size ? (errors?.size?.message as string) : undefined
            }
            register={register}
            maxwidth="100%"
            options={[
              "PP",
              "P",
              "M",
              "G",
              "GG",
              "33",
              "34",
              "35",
              "36",
              "37",
              "38",
              "39",
              "40",
              "41",
              "42",
              "43",
              "44",
              "45",
              "46",
            ]}
          />
          <Select
            placeholder="Categoria"
            name="category"
            message={
              errors?.category
                ? (errors?.category?.message as string)
                : undefined
            }
            register={register}
            maxwidth="100%"
            options={categoriesNames}
          />
          <Select
            placeholder="Marca"
            name="brand"
            message={
              errors?.brand ? (errors?.brand?.message as string) : undefined
            }
            register={register}
            maxwidth="100%"
            options={brandsNames}
          />
          <File
            multiple={3}
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

export const ModalDeleteProduct = () => {
  const { setProductsAdmin, page } = useMenu();
  return (
    <Modal
      keyOpenModal="ModalDeleteProduct"
      nameModal="Deletar produto?"
      onSubmit={async (data: any) => {
        const products = await ListProductsAdminRequest(page);
        setProductsAdmin(products.result);
        return "Produto deletado com sucesso";
      }}
      components={({ register, formState: { errors } }, setDataModal) => (
        <>
          <Button
            onclick={async () => {
              await deleteProductRequest();
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

export const ModalEditeProduct = () => {
  const { setProductsAdmin, setCategories, setBrands, page } = useMenu();
  const [categoriesNames, setCategoriesNames] = useState<Array<string>>([]);
  const [brandsNames, setBrandsNames] = useState<Array<string>>([]);

  useEffect(() => {
    (async () => {
      const brand = await listBrandsRequest();
      setBrands(brand.brands);
      setBrandsNames(brand.brands.map((element) => element.name));
    })();
    (async () => {
      const category = await listCategoryRequest();
      setCategories(category.categories);
      setCategoriesNames(category.categories.map((element) => element.name));
    })();
  }, []);
  const { data } = useModal();
  return (
    <Modal
      keyOpenModal="ModalEditeProduct"
      nameModal="Editar produto?"
      onSubmit={async (data: any) => {
        if (data.name === "") {
          delete data.name;
        }
        if (data.salePrice === "") {
          delete data.salePrice;
        }
        if (data.description === "") {
          delete data.description;
        }
        if (data.size === "") {
          delete data.size;
        }
        if (data.color === "") {
          delete data.color;
        }
        if (data.priceSeller === "") {
          delete data.priceSeller;
        }
        if (data.category === "") {
          delete data.category;
        }
        if (data.brand === "") {
          delete data.brand;
        }
        if (data.salePrice) {
          data.isSale = true;
        }
        console.log(data);
        const response = await UpdateProductRequest(data);
        const products = await ListProductsAdminRequest(page);
        setProductsAdmin(products.result);
        return "Produto editada com sucesso";
      }}
      components={({ register, formState: { errors } }, setDataModal) => (
        <>
          <Input
            placeholder="Valor promocional"
            name="salePrice"
            message={
              errors?.salePrice
                ? (errors?.salePrice?.message as string)
                : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
          />
          <Input
            placeholder="Name"
            name="name"
            message={
              errors?.name ? (errors?.name?.message as string) : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
            defaultvalue={data.name}
          />

          <Input
            placeholder="Descrição"
            name="description"
            message={
              errors?.description
                ? (errors?.description?.message as string)
                : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
            defaultvalue={data.description}
          />
          <Input
            placeholder="Cor"
            name="color"
            message={
              errors?.color ? (errors?.color?.message as string) : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
            defaultvalue={data.color}
          />
          <Input
            placeholder="Preço do vendedor"
            name="priceSeller"
            message={
              errors?.priceSeller
                ? (errors?.priceSeller?.message as string)
                : undefined
            }
            type="text"
            register={register}
            maxwidth="100%"
            defaultvalue={data.priceSeller}
          />
          <Select
            placeholder="Tamanho"
            name="size"
            message={
              errors?.size ? (errors?.size?.message as string) : undefined
            }
            register={register}
            maxwidth="100%"
            options={[
              "PP",
              "P",
              "M",
              "G",
              "GG",
              "33",
              "34",
              "35",
              "36",
              "37",
              "38",
              "39",
              "40",
              "41",
              "42",
              "43",
              "44",
              "45",
              "46",
            ]}
          />
          <Select
            placeholder="Categoria"
            name="category"
            message={
              errors?.category
                ? (errors?.category?.message as string)
                : undefined
            }
            register={register}
            maxwidth="100%"
            options={categoriesNames}
          />
          <Select
            placeholder="Marca"
            name="brand"
            message={
              errors?.brand ? (errors?.brand?.message as string) : undefined
            }
            register={register}
            maxwidth="100%"
            options={brandsNames}
          />
          <Button type="submit" color="gold" size="medium">
            Editar
          </Button>
        </>
      )}
    />
  );
};

export const ModalUpdateImageProduct = () => {
  const { images, setProductsAdmin, page } = useMenu();

  return (
    <Modal
      keyOpenModal="ModalUpdateImageProduct"
      nameModal="Atualizar imagem da produto"
      maxWidth="300px"
      onSubmit={async (data: any) => {
        const productId = localStorage.idProduct;
        if (data.image_1) {
          const image = { image: data.image_1 };
          const uploadImages = await UpdateImageProductRequest(
            image,
            "image_1",
            productId
          );
        }
        if (data.image_2) {
          const image = { image: data.image_2 };
          const uploadImages = await UpdateImageProductRequest(
            image,
            "image_2",
            productId
          );
        }
        if (data.image_3) {
          const image = { image: data.image_3 };
          const uploadImages = await UpdateImageProductRequest(
            image,
            "image_3",
            productId
          );
        }

        const products = await ListProductsAdminRequest(page);
        setProductsAdmin(products.result);
        return "Imagens atualizadas com sucesso";
      }}
      components={({ register, formState: { errors } }, setDataModal) => (
        <>
          <>
            <StyledImageUpdate
              src={images.image_1 ? images.image_1 : noImage}
              alt=""
            />
            <File
              multiple={1}
              onChange={(files) =>
                setDataModal((data) => {
                  return { ...data, image_1: files.image_1 };
                })
              }
            />
            <StyledImageUpdate
              src={images.image_2 ? images.image_2 : noImage}
              alt=""
            />
            <File
              multiple={1}
              onChange={(files) =>
                setDataModal((data) => {
                  return { ...data, image_2: files.image_1 };
                })
              }
            />
            <StyledImageUpdate
              src={images.image_3 ? images.image_3 : noImage}
              alt=""
            />

            <File
              multiple={1}
              onChange={(files) =>
                setDataModal((data) => {
                  return { ...data, image_3: files.image_1 };
                })
              }
            />
          </>

          <Button type="submit" color="gold" size="medium">
            Atualizar Imagem
          </Button>
        </>
      )}
    />
  );
};
