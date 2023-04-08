import { useEffect, useState } from "react";
import { useMenu } from "../../context/menu.context";
import { StyledListProductsCarousel } from "../../pages/initial/style";
import { IProduct } from "../../services/api/products/interface.products";
import {
  ListProductsAdminRequest,
  ListProductsRequest,
  ListRecentsProductsRequest,
} from "../../services/api/products/request.products";
import { PaginationRounded } from "../../services/methods";
import CardProducts from "./cardProducts";
import { StyledBoxPagination } from "./cardProducts/style";

interface IListProducts {
  type?: "admin" | "carousel";
  products: IProduct[];
  pages: boolean;
}

const ListProducts = ({ type, products, pages }: IListProducts) => {
  const { qtPages } = useMenu();

  return (
    <>
      {type === "carousel" && products.length !== 0 ? (
        <StyledListProductsCarousel>
          {products.map((element: any) => (
            <CardProducts product={element} type={type} key={element.id} />
          ))}
        </StyledListProductsCarousel>
      ) : (
        products.map((element: any) => (
          <CardProducts product={element} type={type} key={element.id} />
        ))
      )}

      {pages && (
        <StyledBoxPagination>{PaginationRounded(qtPages)}</StyledBoxPagination>
      )}
    </>
  );
};
export default ListProducts;
