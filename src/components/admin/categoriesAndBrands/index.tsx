import {
  StyledBoxButtonsTitle,
  StyledBoxCategoriesAndBrandsAdmin,
  StyledBoxListAndSearch,
  StyledButtonMore,
  StyledCategoriesTitle,
  StyledList,
  StyledWellcomeDesk,
} from "./style";
import sum from "../../../assets/menuIcons/moreCategories.png";
import less from "../../../assets/menuIcons/lessWhite.png";
import more from "../../../assets/menuIcons/moreWhite.png";
import { useState } from "react";

import { AnimatePresence } from "framer-motion";
import Categories from "../../header/categoriesMenu";

import Brands from "../../header/brandsMenu";
import AdminSearch from "../search";
import ModalDeleteCategory, {
  ModalCreateCategory,
  ModalEditeCategory,
} from "../../../modal/category.modal";
import { useModal } from "../../../context/modal.context";
import {
  ModalCreateBrands,
  ModalDeleteBrand,
  ModalEditeBrand,
  ModalUpdateImageBrands,
} from "../../../modal/brands.modals";

const CategoriesAndBrands = () => {
  const [openListCategories, setOpenListCategories] = useState(false);
  const [openListBrands, setOpenListBrands] = useState(false);
  const { setIsOpenModal } = useModal();

  const handleList = (type: string) => {
    if (type === "categories") {
      return setOpenListCategories(!openListCategories);
    } else if (type === "brands") {
      return setOpenListBrands(!openListBrands);
    }
  };

  return (
    <>
      <StyledBoxCategoriesAndBrandsAdmin>
        <StyledWellcomeDesk>
          <h2>Bem vindo, essa é a área administrativa</h2>
        </StyledWellcomeDesk>
        <StyledCategoriesTitle>
          <h1>CATEGORIAS</h1>
          <StyledBoxButtonsTitle>
            <StyledButtonMore
              onClick={() => setIsOpenModal("ModalCreateCategory")}
            >
              <img src={sum} alt="" />
            </StyledButtonMore>
            <StyledButtonMore
              onClick={() => handleList("categories")}
              color="gold"
            >
              <img src={openListCategories ? less : more} alt="" />
            </StyledButtonMore>
          </StyledBoxButtonsTitle>
        </StyledCategoriesTitle>
        <AnimatePresence>
          {openListCategories && (
            <StyledBoxListAndSearch>
              <AdminSearch type="categories" />
              <StyledList
                initial={{ opacity: "0%" }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: "100%" }}
                exit={{ opacity: "0%" }}
              >
                <Categories admin="admin" />
              </StyledList>
            </StyledBoxListAndSearch>
          )}
        </AnimatePresence>
        <StyledCategoriesTitle>
          <h1>MARCAS</h1>
          <StyledBoxButtonsTitle>
            <StyledButtonMore
              onClick={() => setIsOpenModal("ModalCreateBrand")}
            >
              <img src={sum} alt="" />
            </StyledButtonMore>
            <StyledButtonMore color="gold" onClick={() => handleList("brands")}>
              <img src={openListBrands ? less : more} alt="" />
            </StyledButtonMore>
          </StyledBoxButtonsTitle>
        </StyledCategoriesTitle>
        <AnimatePresence>
          {openListBrands && (
            <StyledBoxListAndSearch>
              <AdminSearch />
              <StyledList
                initial={{ opacity: "0%" }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: "100%" }}
                exit={{ opacity: "0%" }}
              >
                <Brands admin="admin" />
              </StyledList>
            </StyledBoxListAndSearch>
          )}
        </AnimatePresence>
      </StyledBoxCategoriesAndBrandsAdmin>
      <ModalCreateCategory />
      <ModalDeleteCategory />
      <ModalEditeCategory />
      <ModalCreateBrands />
      <ModalDeleteBrand />
      <ModalEditeBrand />
      <ModalUpdateImageBrands />
    </>
  );
};

export default CategoriesAndBrands;
