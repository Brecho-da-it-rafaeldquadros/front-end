import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useMenu } from "../../../context/menu.context";
import Icons from "../../../services/icons/icons";
import { schemaSearch } from "../../../validations/menu.validation";
import { StyledFormSearch, StyledSearchInput } from "./style";

export interface ISearch {
  search: string;
}

const Search = () => {
  const { showSearch, handleSearch } = useMenu();

  const {
    handleSubmit,
    register,
    formState: {
      errors: { search },
    },
  } = useForm<ISearch>({
    resolver: yupResolver(schemaSearch),
  });

  return (
    <AnimatePresence>
      {showSearch && (
        <StyledFormSearch
          onSubmit={handleSubmit(handleSearch)}
          initial={{ y: "-100%" }}
          transition={{ duration: 0.5 }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          layout
        >
          <StyledSearchInput>
            <input
              type="text"
              id="search"
              placeholder="Pesquisar"
              {...register("search")}
            />

            <button type="submit">
              <Icons.Glass />
            </button>
          </StyledSearchInput>
        </StyledFormSearch>
      )}
    </AnimatePresence>
  );
};

export default Search;
