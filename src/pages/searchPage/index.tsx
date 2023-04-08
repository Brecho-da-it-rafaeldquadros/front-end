import { useEffect, useState } from "react";
import BasePage from "../../components/basePage";
import {
  StyledInitial,
  StyledListProductsHome,
  StyledTitleHome,
} from "../initial/style";
import { v4 as uuid } from "uuid";
import ListProducts from "../../components/listProducts";
import { useMenu } from "../../context/menu.context";
import { SearchProductRequest } from "../../services/api/products/request.products";
import Benefits from "../../components/benefits";
import { StyledProducts } from "../products/style";

const SearchProducts = () => {
  const {
    productsFiltered,
    setProductsFiltered,
    nameProductsList,
    setNameProductsList,
    searchProduct,
    page,
    qtPages,
    setQtPages,
  } = useMenu();
  const [allProducts, setAllProducts] = useState([]);
  const [allProductsName, setAllProductsName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await SearchProductRequest(searchProduct, page);
      setProductsFiltered(response.result);
      setNameProductsList(
        `Resultado da pesquisa para: ${searchProduct.search}`
      );
      setQtPages(response.amountPage);
    })();
  }, [page]);

  useEffect(() => {
    (async () => {
      const response = await SearchProductRequest(searchProduct, page);
      console.log(response);
      setProductsFiltered(response.result);
      setNameProductsList(
        `Resultado da pesquisa para: ${searchProduct.search}`
      );
      setQtPages(response.amountPage);
    })();
  }, [searchProduct]);

  return (
    <BasePage>
      <StyledProducts>
        <StyledInitial>
          <StyledTitleHome>
            <h2>
              {productsFiltered.length ? nameProductsList : allProductsName}
            </h2>
          </StyledTitleHome>
          <StyledListProductsHome>
            <ListProducts
              products={
                productsFiltered.length ? productsFiltered : allProducts
              }
              pages={qtPages > 0 ? true : false}
              key={uuid()}
            />
          </StyledListProductsHome>
          <Benefits />
        </StyledInitial>
      </StyledProducts>
    </BasePage>
  );
};

export default SearchProducts;
