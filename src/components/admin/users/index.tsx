import {
  StyledBoxCategoriesAndBrandsAdmin,
  StyledButtonMore,
} from "../categoriesAndBrands/style";
import sum from "../../../assets/menuIcons/moreCategories.png";
import { useModal } from "../../../context/modal.context";
import { StyledTitleUser, StyledUserList, StyledUsersBox } from "./style";
import ListUsers from "./listUser";
import { PaginationRounded } from "../../../services/methods";
import { useEffect } from "react";
import { listUserRequest } from "../../../services/api/user/request.user";
import { useMenu } from "../../../context/menu.context";
import { StyledBoxPagination } from "../../listProducts/cardProducts/style";

const AdminUsers = () => {
  const { setIsOpenModal } = useModal();
  const { users, setUsers, page, qtUserPages, setQtUserPages } = useMenu();

  useEffect(() => {
    (async () => {
      const response = await listUserRequest(page);
      setUsers(response.result);
      setQtUserPages(response.amountPage);
    })();
  }, [page]);

  return (
    <StyledBoxCategoriesAndBrandsAdmin>
      <StyledTitleUser>
        <h2>TODOS OS USUARIOS</h2>
        <StyledButtonMore
          color="noMarginRight"
          onClick={() => setIsOpenModal("ModalAutenticationCreateUserAdmin")}
        >
          <img src={sum} alt="" />
        </StyledButtonMore>
      </StyledTitleUser>
      <StyledUsersBox>
        <StyledUserList>
          <ListUsers />
        </StyledUserList>
        <StyledBoxPagination>
          {PaginationRounded(qtUserPages)}
        </StyledBoxPagination>
      </StyledUsersBox>
    </StyledBoxCategoriesAndBrandsAdmin>
  );
};
export default AdminUsers;
