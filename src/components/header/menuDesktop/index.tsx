import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useMenu } from "../../../context/menu.context";
import {
  ListProductsRequest,
  ListRecentsProductsRequest,
} from "../../../services/api/products/request.products";
import Brands from "../brandsMenu";
import Categories from "../categoriesMenu";
import {
  StyledBoxMenuDesk,
  StyledBoxSubMenuDesk,
  StyledMenuDesk,
  StyledSubMenuDesk,
} from "./style";

const MenuDesk = () => {
  const { setProductsFiltered, setNameProductsList, setQtPages, page } =
    useMenu();
  return (
    <StyledMenuDesk>
      <StyledBoxMenuDesk>
        <Link
          to="/produtos/todos"
          onClick={async () => {
            const products = await ListRecentsProductsRequest();
            setQtPages(0);
            setProductsFiltered(products.twentyLatestProducts);
            setNameProductsList("ADICIONADOS RECENTEMENTE");
          }}
        >
          Recentes
        </Link>
        <StyledBoxSubMenuDesk>
          <p>Marcas</p>
          <AnimatePresence>
            <StyledSubMenuDesk>
              <Brands />
            </StyledSubMenuDesk>
          </AnimatePresence>
        </StyledBoxSubMenuDesk>
        <StyledBoxSubMenuDesk>
          <p>Categorias</p>
          <StyledSubMenuDesk>
            <Categories />
          </StyledSubMenuDesk>
        </StyledBoxSubMenuDesk>
        <Link
          to="/produtos/todos"
          onClick={async () => {
            const response = await ListProductsRequest(page, "promotion");
            setProductsFiltered(response.result);

            setQtPages(response.amountPage);

            setNameProductsList("PRODUTOS EM PROMOÇÃO");
          }}
        >
          Promoções
        </Link>
      </StyledBoxMenuDesk>
    </StyledMenuDesk>
  );
};

export default MenuDesk;
