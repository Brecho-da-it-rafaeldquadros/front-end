import { useEffect, useState } from "react";
import BasePage from "../../components/basePage";
import {
  StyledInitial,
  StyledListProductsHome,
  StyledTitleHome,
} from "../initial/style";
import { StyledProducts } from "./style";
import { v4 as uuid } from "uuid";
import ListProducts from "../../components/listProducts";
import { useMenu } from "../../context/menu.context";
import { ListProductsRequest } from "../../services/api/products/request.products";
import Benefits from "../../components/benefits";

const ProductsList = () => {
  const {
    productsFiltered,
    setProductsFiltered,
    nameProductsList,
    setNameProductsList,
    page,
    qtPages,
    setQtPages,
  } = useMenu();
  const [allProducts, setAllProducts] = useState([]);
  const [allProductsName, setAllProductsName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await ListProductsRequest(page);
      setAllProducts(response.result);
      setQtPages(response.amountPage);
      setAllProductsName("TODOS OS PRODUTOS");
    })();
  }, [page]);

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
              pages={qtPages > 1 ? true : false}
              key={uuid()}
            />
          </StyledListProductsHome>
          <Benefits />
        </StyledInitial>
      </StyledProducts>
    </BasePage>
  );
};

export default ProductsList;
