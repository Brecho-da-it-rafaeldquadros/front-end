import { useContext, useEffect, useState } from "react";
import { RequestContext } from "../../../context/request.context";
import { IDataResponseCreateCategoryRequest } from "../../../services/api/category/interface.category";
import { Link, useNavigate } from "react-router-dom";
import {
  StyledBoxButtons,
  StyledButtonMore,
} from "../../admin/categoriesAndBrands/style";
import pen from "../../../assets/menuIcons/pen.png";
import trash from "../../../assets/menuIcons/trash.png";
import { useMenu } from "../../../context/menu.context";
import { useModal } from "../../../context/modal.context";
import { ListCategoryProductsRequest } from "../../../services/api/category/request.category";

export interface IAdminCategories {
  admin?: string;
}

const Categories = ({ admin }: IAdminCategories) => {
  const navigate = useNavigate();
  const { listCategoryRequest } = useContext(RequestContext);

  const {
    categories,
    setCategories,
    searchCategories,
    setProductsFiltered,
    setNameProductsList,
    handleMenu,
  } = useMenu();
  const { setData, id, setIsOpenModal } = useModal();

  useEffect(() => {
    (async () => {
      const category = await listCategoryRequest();
      setCategories(category.categories);
    })();
  }, []);

  return (
    <>
      {searchCategories.length > 0
        ? searchCategories.map((element) => (
            <li id={element.id} key={element.id}>
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
                      localStorage.setItem("idCategory", element.id);
                      setData(element.name);
                      return setIsOpenModal("ModalEditeCategory");
                    }}
                  >
                    <img src={pen} alt="" />
                  </StyledButtonMore>
                  <StyledButtonMore
                    onClick={() => {
                      localStorage.setItem("idCategory", element.id);
                      return setIsOpenModal("ModalDeleteCategory");
                    }}
                    color="red"
                  >
                    <img src={trash} alt="" />
                  </StyledButtonMore>
                </StyledBoxButtons>
              )}
            </li>
          ))
        : categories.map((element) => (
            <li
              id={element.id}
              onClick={async () => {
                if (admin !== "admin") {
                  const response: any = await ListCategoryProductsRequest(
                    element.id
                  );
                  setProductsFiltered(response.products);
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
                      localStorage.setItem("idCategory", element.id);
                      setData(element.name);
                      return setIsOpenModal("ModalEditeCategory");
                    }}
                  >
                    <img src={pen} alt="" />
                  </StyledButtonMore>
                  <StyledButtonMore
                    onClick={() => {
                      localStorage.setItem("idCategory", element.id);
                      return setIsOpenModal("ModalDeleteCategory");
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
export default Categories;
