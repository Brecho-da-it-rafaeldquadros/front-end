import { useContext, useEffect } from "react";
import { RequestContext } from "../../../context/request.context";
import { Link, useNavigate } from "react-router-dom";
import {
  StyledBoxButtons,
  StyledButtonMore,
} from "../../admin/categoriesAndBrands/style";
import pen from "../../../assets/menuIcons/pen.png";
import trash from "../../../assets/menuIcons/trash.png";
import picture from "../../../assets/menuIcons/pictures.png";
import { IAdminCategories } from "../categoriesMenu";
import { useMenu } from "../../../context/menu.context";
import { useModal } from "../../../context/modal.context";
import { ListBrandsProductsRequest } from "../../../services/api/brand/request.brand";

const Brands = ({ admin }: IAdminCategories) => {
  const navigate = useNavigate();
  const { listBrandsRequest } = useContext(RequestContext);
  const { setIsOpenModal, setData } = useModal();
  const {
    brands,
    setBrands,
    searchBrands,
    setProductsFiltered,
    setNameProductsList,
    handleMenu,
  } = useMenu();
  useEffect(() => {
    (async () => {
      const brand = await listBrandsRequest();
      setBrands(brand.brands);
    })();
  }, []);
  return (
    <>
      {searchBrands.length > 0
        ? searchBrands.map((element) => (
            <li key={element.id}>
              <Link
                className="subMenu"
                key={element.id}
                id={element.id}
                to={"/produtos/todos"}
                onClick={async () => {
                  const response: any = await ListBrandsProductsRequest(
                    element.id
                  );
                  setProductsFiltered(response.productsDisponible);
                  setNameProductsList(response.message);
                  navigate("/admin");
                }}
              >
                {element.name}
              </Link>
              {admin === "admin" && (
                <StyledBoxButtons>
                  <StyledButtonMore
                    onClick={() => {
                      localStorage.setItem("idBrand", element.id);
                      setData(element.name);
                      return setIsOpenModal("ModalEditeBrand");
                    }}
                  >
                    <img src={pen} alt="" />
                  </StyledButtonMore>
                  <StyledButtonMore
                    onClick={() => {
                      localStorage.setItem("idBrand", element.id);
                      return setIsOpenModal("ModalUpdateImageBrand");
                    }}
                    color="goldOne"
                  >
                    <img src={picture} alt="" />
                  </StyledButtonMore>
                  <StyledButtonMore
                    onClick={() => {
                      localStorage.setItem("idBrand", element.id);
                      return setIsOpenModal("ModalDeleteBrand");
                    }}
                    color="red"
                  >
                    <img src={trash} alt="" />
                  </StyledButtonMore>
                </StyledBoxButtons>
              )}
            </li>
          ))
        : brands.map((element) => (
            <li
              onClick={async () => {
                if (admin !== "admin") {
                  const response: any = await ListBrandsProductsRequest(
                    element.id
                  );
                  setProductsFiltered(response.productsDisponible);
                  setNameProductsList(response.message);
                  navigate("/produtos/todos");
                  handleMenu("menu");
                }
              }}
            >
              <Link
                className="subMenu"
                key={element.id}
                id={element.id}
                to={"/produtos/todos"}
              >
                {element.name}
              </Link>
              {admin === "admin" && (
                <StyledBoxButtons>
                  <StyledButtonMore
                    onClick={() => {
                      localStorage.setItem("idBrand", element.id);
                      setData(element.name);
                      return setIsOpenModal("ModalEditeBrand");
                    }}
                  >
                    <img src={pen} alt="" />
                  </StyledButtonMore>
                  <StyledButtonMore
                    onClick={() => {
                      localStorage.setItem("idBrand", element.id);
                      return setIsOpenModal("ModalUpdateImageBrand");
                    }}
                    color="goldOne"
                  >
                    <img src={picture} alt="" />
                  </StyledButtonMore>
                  <StyledButtonMore
                    onClick={() => {
                      localStorage.setItem("idBrand", element.id);
                      return setIsOpenModal("ModalDeleteBrand");
                    }}
                    color="red"
                  >
                    <img src={trash} alt="" />
                  </StyledButtonMore>
                </StyledBoxButtons>
              )}
            </li>
          ))}
    </>
  );
};
export default Brands;
