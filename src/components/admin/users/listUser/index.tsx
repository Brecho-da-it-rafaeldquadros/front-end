import { StyledButtonMore } from "../../categoriesAndBrands/style";
import pen from "../../../../assets/menuIcons/pen.png";
import { StyledNivelAndEdit } from "../style";
import { useMenu } from "../../../../context/menu.context";
import { useNavigate } from "react-router-dom";

const ListUsers = () => {
  const { users } = useMenu();
  const navigate = useNavigate();

  return (
    <>
      {users.length > 0 &&
        users.map((element: any) => (
          <li key={element.id}>
            <h2>{element.fullName}</h2>
            <StyledNivelAndEdit>
              <p>NIVEL {element.authorizationLevel}</p>
              <StyledButtonMore
                onClick={() => {
                  navigate(`/perfil/${element.id}`);
                }}
              >
                <img src={pen} alt="" />
              </StyledButtonMore>
            </StyledNivelAndEdit>
          </li>
        ))}
    </>
  );
};
export default ListUsers;
