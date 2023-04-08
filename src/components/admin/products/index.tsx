import { StyledButtonMore } from "../categoriesAndBrands/style";
import sum from "../../../assets/menuIcons/moreCategories.png";
import { useModal } from "../../../context/modal.context";
import { StyledAdminProducts, StyledListProducts, StyledTitle } from "./style";
import ListProducts from "../../listProducts";
import {
  ModalCreateProduct,
  ModalDeleteProduct,
  ModalEditeProduct,
  ModalUpdateImageProduct,
} from "../../../modal/products.modals";
import { useEffect } from "react";
import { ListProductsAdminRequest } from "../../../services/api/products/request.products";
import { useMenu } from "../../../context/menu.context";

const AdminProducts = () => {
  const { setIsOpenModal } = useModal();
  const { page, setQtPages, setProductsAdmin, productsAdmin } = useMenu();
  useEffect(() => {
    (async () => {
      const products: any = await ListProductsAdminRequest(page);
      setQtPages(products.amountPage);
      setProductsAdmin(products.result);
    })();
  }, [page]);

  return (
    <>
      <StyledAdminProducts>
        <StyledTitle>
          <h2>TODOS OS PRODUTOS</h2>
          <StyledButtonMore
            onClick={() => setIsOpenModal("ModalCreateProduct")}
          >
            <img src={sum} alt="" />
          </StyledButtonMore>
        </StyledTitle>
        <StyledListProducts>
          <ListProducts type="admin" products={productsAdmin} pages={true} />
        </StyledListProducts>
      </StyledAdminProducts>
      <ModalCreateProduct />
      <ModalDeleteProduct />
      <ModalEditeProduct />
      <ModalUpdateImageProduct />
    </>
  );
};

export default AdminProducts;
