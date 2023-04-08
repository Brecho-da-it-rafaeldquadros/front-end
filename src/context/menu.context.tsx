import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IAdminCategories } from "../components/header/categoriesMenu";
import { IDataResponseCreateBrandRequest } from "../services/api/brand/interface.brand";
import { listBrandsRequest } from "../services/api/brand/request.brand";
import { IDataResponseCreateCategoryRequest } from "../services/api/category/interface.category";
import { listCategoryRequest } from "../services/api/category/request.category";
import { IProduct } from "../services/api/products/interface.products";
import { SearchProductRequest } from "../services/api/products/request.products";

interface IMenuContext {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenuCategories: boolean;
  setOpenMenuCategories: React.Dispatch<React.SetStateAction<boolean>>;
  openMenuBrands: boolean;
  setOpenMenuBrands: React.Dispatch<React.SetStateAction<boolean>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenu: (show: string) => void;
  handleSearch: (data: any) => void;
  categories: IDataResponseCreateCategoryRequest[];
  setCategories: React.Dispatch<
    React.SetStateAction<IDataResponseCreateCategoryRequest[]>
  >;
  brands: IDataResponseCreateBrandRequest[];
  setBrands: React.Dispatch<
    React.SetStateAction<IDataResponseCreateBrandRequest[]>
  >;
  productsAdmin: IProduct[] | [];
  setProductsAdmin: React.Dispatch<React.SetStateAction<IProduct[]>>;
  images: any;
  setImages: React.Dispatch<React.SetStateAction<{}>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  searchCategories: IDataResponseCreateCategoryRequest[];
  setSearchCategories: React.Dispatch<
    React.SetStateAction<IDataResponseCreateCategoryRequest[]>
  >;
  searchBrands: IDataResponseCreateBrandRequest[];
  setSearchBrands: React.Dispatch<
    React.SetStateAction<IDataResponseCreateBrandRequest[]>
  >;
  users: any;
  setUsers: React.Dispatch<React.SetStateAction<never[]>>;
  qtUserPages: number;
  setQtUserPages: React.Dispatch<React.SetStateAction<number>>;
  allProducts: IProduct[] | [];
  setAllProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  recentsProducts: IProduct[] | [];
  setRecentsProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  qtPages: number;
  setQtPages: React.Dispatch<React.SetStateAction<number>>;
  productsFiltered: IProduct[] | [];
  setProductsFiltered: React.Dispatch<React.SetStateAction<IProduct[]>>;
  nameProductsList: String;
  setNameProductsList: React.Dispatch<React.SetStateAction<String>>;
  searchProduct: string;
  setSearchProduct: React.Dispatch<React.SetStateAction<string>>;
}

interface IMenuProps {
  children: ReactNode;
}

const MenuContext = createContext<IMenuContext>({} as IMenuContext);

export const MenuProvider = ({ children }: IMenuProps) => {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuCategories, setOpenMenuCategories] = useState(false);
  const [openMenuBrands, setOpenMenuBrands] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [categories, setCategories] = useState(
    [] as IDataResponseCreateCategoryRequest[]
  );

  const [productsAdmin, setProductsAdmin] = useState<IProduct[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [recentsProducts, setRecentsProducts] = useState<IProduct[]>([]);
  const [qtPages, setQtPages] = useState(0);
  const [productsFiltered, setProductsFiltered] = useState<IProduct[]>([]);
  const [nameProductsList, setNameProductsList] = useState<String>("");

  const [brands, setBrands] = useState([] as IDataResponseCreateBrandRequest[]);
  const [images, setImages] = useState({});
  const [page, setPage] = useState(1);
  const [searchCategories, setSearchCategories] = useState(
    [] as IDataResponseCreateCategoryRequest[]
  );
  const [searchBrands, setSearchBrands] = useState(
    [] as IDataResponseCreateBrandRequest[]
  );
  const [users, setUsers] = useState([]);
  const [qtUserPages, setQtUserPages] = useState(0);

  const [searchProduct, setSearchProduct] = useState("");

  const handleMenu = (show: string) => {
    if (show === "categories") {
      return setOpenMenuCategories(!openMenuCategories);
    } else if (show === "brands") {
      return setOpenMenuBrands(!openMenuBrands);
    } else if (show === "menu") {
      if (showSearch) {
        setShowSearch(false);
        return setTimeout(() => {
          setOpenMenu(!openMenu);
        }, 1000);
      }
      return setOpenMenu(!openMenu);
    } else if (show === "search") {
      if (openMenu) {
        setOpenMenu(false);
        return setTimeout(() => {
          setShowSearch(!showSearch);
        }, 1000);
      }
      return setShowSearch(!showSearch);
    }
  };

  const handleSearch = async (data: any) => {
    const response = await SearchProductRequest(data, page);
    setProductsFiltered(response.result);
    setSearchProduct(data);
    setQtPages(response.amountPage);
    navigate("/produtos/pesquisa");
  };

  return (
    <MenuContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        openMenuCategories,
        setOpenMenuCategories,
        openMenuBrands,
        setOpenMenuBrands,
        showSearch,
        setShowSearch,
        handleMenu,
        handleSearch,
        categories,
        setCategories,
        brands,
        setBrands,
        productsAdmin,
        setProductsAdmin,
        images,
        setImages,
        page,
        setPage,
        searchCategories,
        setSearchCategories,
        searchBrands,
        setSearchBrands,
        users,
        setUsers,
        qtUserPages,
        setQtUserPages,
        allProducts,
        setAllProducts,
        recentsProducts,
        setRecentsProducts,
        qtPages,
        setQtPages,
        productsFiltered,
        setProductsFiltered,
        nameProductsList,
        setNameProductsList,
        searchProduct,
        setSearchProduct,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
