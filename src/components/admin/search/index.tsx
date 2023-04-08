import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMenu } from "../../../context/menu.context";
import Icons from "../../../services/icons/icons";
import { schemaSearch } from "../../../validations/menu.validation";
import { StyledAdminSearch } from "./styled";

interface ISearch {
  search: string;
}
interface IAdminSearch {
  type?: "categories";
}

const AdminSearch = ({ type }: IAdminSearch) => {
  const { categories, setSearchCategories, brands, setSearchBrands } =
    useMenu();
  const {
    handleSubmit,
    register,
    formState: {
      errors: { search },
    },
  } = useForm<ISearch>({
    resolver: yupResolver(schemaSearch),
  });

  const handleSearchCategories = (data: any) => {
    const result = categories.filter((element) =>
      element.name.toLowerCase().includes(data.search.toLowerCase())
    );
    setSearchCategories(result);
  };

  const handleSearchBrands = (data: any) => {
    const result = brands.filter((element) =>
      element.name.toLowerCase().includes(data.search.toLowerCase())
    );
    setSearchBrands(result);
  };

  return (
    <StyledAdminSearch
      initial={{ opacity: "0%" }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: "0%" }}
      onSubmit={handleSubmit(
        type === "categories" ? handleSearchCategories : handleSearchBrands
      )}
    >
      <div>
        <input
          type="text"
          id="search"
          placeholder="pesquisar"
          {...register("search")}
          onChange={(e: any) =>
            e.target.value.length === 0 && type === "categories"
              ? setSearchCategories([])
              : setSearchBrands([])
          }
        />

        <button type="submit">
          <Icons.Glass />
        </button>
      </div>
    </StyledAdminSearch>
  );
};

export default AdminSearch;
