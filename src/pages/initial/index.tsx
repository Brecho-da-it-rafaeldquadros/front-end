import { useEffect } from "react";

import BasePage from "../../components/basePage";
import Benefits from "../../components/benefits";
import ListProducts from "../../components/listProducts";
import { useMenu } from "../../context/menu.context";
import {
  ListProductsRequest,
  ListRecentsProductsRequest,
} from "../../services/api/products/request.products";
import {
  StyledBackgroundImage,
  StyledBoxImageHome,
  StyledImgText,
  StyledInitial,
  StyledListProductsCarousel,
  StyledListProductsHome,
  StyledSeeMore,
  StyledTitleHome,
} from "./style";

import homeImage from "../../assets/menuIcons/unsplash__3Q3tsJ01nc.png";
import Header from "../../components/header";
import { StyledTitle } from "../../components/admin/products/style";
import { useNavigate } from "react-router-dom";

const Initial = () => {
  const navigate = useNavigate();

  const {
    setQtPages,
    page,
    setRecentsProducts,
    setProductsAdmin,
    recentsProducts,
    productsAdmin,
    setProductsFiltered,
    qtPages,
    setNameProductsList,
  } = useMenu();
  useEffect(() => {
    (async () => {
      const productsRecents: any = await ListRecentsProductsRequest();
      setRecentsProducts(productsRecents.twentyLatestProducts);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const products: any = await ListProductsRequest(page);
      setQtPages(products.amountPage);
      setProductsAdmin(products.result);
    })();
  }, [page]);

  return (
    <>
      <BasePage>
        <StyledBoxImageHome>
          <StyledBackgroundImage />
          <img src={homeImage} alt="" />
          <StyledImgText>
            <p>O melhor local para roupas de qualidade com preço justo!</p>
            <h4>
              Encontre roupas semi-novas com preço justo e uma experiência de
              compra incrível.
            </h4>
          </StyledImgText>
        </StyledBoxImageHome>
        <StyledInitial>
          <StyledTitleHome>
            <h2>ADICIONADOS RECENTEMENTE</h2>
          </StyledTitleHome>
          <StyledListProductsCarousel>
            <ListProducts
              type="carousel"
              products={recentsProducts}
              pages={false}
            />
          </StyledListProductsCarousel>
          <Benefits />
          <StyledTitleHome>
            <h2>TODOS OS PRODUTOS</h2>
            <StyledSeeMore
              onClick={async () => {
                setProductsFiltered([]);
                navigate("/produtos/todos");
              }}
            >
              VER TODOS
            </StyledSeeMore>
          </StyledTitleHome>
          <StyledListProductsHome>
            <ListProducts products={productsAdmin} pages={true} />
          </StyledListProductsHome>
        </StyledInitial>
      </BasePage>
    </>
  );
};

export default Initial;
