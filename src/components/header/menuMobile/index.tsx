import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useMenu } from "../../../context/menu.context";
import {
  StyledBoxMenu,
  StyledImg,
  StyledItenMenu,
  StyledListCategory,
  StyledMenu,
  StyledMore,
  StyledSubMenu,
} from "./style";
import Brands from "../brandsMenu";

import house from "../../../assets/menuIcons/house.png";
import categories from "../../../assets/menuIcons/categories.png";
import more from "../../../assets/menuIcons/more.png";
import less from "../../../assets/menuIcons/less.png";
import Categories from "../categoriesMenu";
import logo from "../../../assets/images/Logo-Manatee-Gradient 1.png";
import promotion from "../../../assets/menuIcons/promotion.png";
import recents from "../../../assets/menuIcons/recents.png";
import LoginMobile from "../menuLoginMobile";
import {
  ListProductsRequest,
  ListRecentsProductsRequest,
} from "../../../services/api/products/request.products";

const MenuMobile = () => {
  const {
    openMenu,
    openMenuCategories,
    openMenuBrands,
    handleMenu,
    setProductsFiltered,
    setNameProductsList,
    page,
    setQtPages,
  } = useMenu();
  return (
    <AnimatePresence>
      {openMenu && (
        <StyledMenu
          initial={{ y: "-100%" }}
          transition={{ duration: 1 }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
        >
          <StyledBoxMenu>
            <Link
              className="itemMenu"
              to="/perfil"
              onClick={() => handleMenu("menu")}
            >
              <StyledItenMenu>
                <StyledImg src={house} alt="imagem minha conta" />
                <p>Minha conta</p>
              </StyledItenMenu>
            </Link>
            <StyledListCategory>
              <StyledItenMenu>
                <StyledImg src={categories} alt="imagem categoria" />
                <p>Categorias</p>
              </StyledItenMenu>
              <StyledMore>
                <img
                  onClick={() => handleMenu("categories")}
                  src={!openMenuCategories ? more : less}
                  alt="mostrar categorias"
                />
              </StyledMore>
            </StyledListCategory>
            <AnimatePresence>
              {openMenuCategories && (
                <StyledSubMenu
                  initial={{ x: "-100%" }}
                  transition={{ duration: 0.5 }}
                  animate={{ x: "0%" }}
                  exit={{ x: "-100%" }}
                >
                  <Categories />
                </StyledSubMenu>
              )}
            </AnimatePresence>

            <StyledListCategory className="itemMenu">
              <StyledItenMenu>
                <StyledImg src={logo} alt="imagem marcas" />
                <p>Marcas</p>
              </StyledItenMenu>
              <StyledMore>
                <img
                  onClick={() => handleMenu("brands")}
                  src={!openMenuBrands ? more : less}
                  alt="mostrar marcas"
                />
              </StyledMore>
            </StyledListCategory>
            <AnimatePresence>
              {openMenuBrands && (
                <StyledSubMenu
                  initial={{ x: "-100%" }}
                  transition={{ duration: 0.5 }}
                  animate={{ x: "0%" }}
                  exit={{ x: "-100%" }}
                >
                  <Brands />
                </StyledSubMenu>
              )}
            </AnimatePresence>
            <Link
              className="itemMenu"
              to="/produtos/todos"
              onClick={async () => {
                const response = await ListProductsRequest(page, "promotion");
                setProductsFiltered(response.result);
                setQtPages(response.amountPage);
                setNameProductsList("PRODUTOS EM PROMOÇÃO");
                handleMenu("menu");
              }}
            >
              <StyledItenMenu>
                <StyledImg src={promotion} alt="imagem marcas" />
                <p>Promoções</p>
              </StyledItenMenu>
            </Link>
            <Link
              className="itemMenu"
              to="/produtos/todos"
              onClick={async () => {
                const products = await ListRecentsProductsRequest();
                setProductsFiltered(products.twentyLatestProducts);
                setNameProductsList("ADICIONADOS RECENTEMENTE");
                handleMenu("menu");
              }}
            >
              <StyledItenMenu>
                <StyledImg src={recents} alt="imagem produtos recents" />
                <p>Recentes</p>
              </StyledItenMenu>
            </Link>
            <Link
              className="itemMenu"
              to="/admin"
              onClick={() => handleMenu("menu")}
            >
              <StyledItenMenu>
                <StyledImg src={house} alt="imagem minha conta" />
                <p>Admin page</p>
              </StyledItenMenu>
            </Link>
          </StyledBoxMenu>
          <LoginMobile />
        </StyledMenu>
      )}
    </AnimatePresence>
  );
};

export default MenuMobile;
