import { StyledButtonMore } from "../../admin/categoriesAndBrands/style";
import {
  StyleButtonRightAndLeft,
  StyledBoxButtonsAdmin,
  StyledBoxButtonsProducts,
  StyledBoxImages,
  StyledBrandName,
  StyledCardProduct,
  StyledImageProduct,
  StyledPriceProduct,
  StyledProductDescription,
  StyledProductName,
  StyledTextPromotion,
} from "./style";
import { useRef } from "react";
import Icons from "../../../services/icons/icons";

import pen from "../../../assets/menuIcons/pen.png";
import trash from "../../../assets/menuIcons/trash.png";
import picture from "../../../assets/menuIcons/pictures.png";
import { useModal } from "../../../context/modal.context";
import { useMenu } from "../../../context/menu.context";
import { useBag } from "../../../context/bag.context";
import { useNavigate } from "react-router-dom";

const CardProducts = ({ product, type }: any) => {
  const { setIsOpenModal, setData } = useModal();
  const { images, setImages } = useMenu();

  const { addProductIdInBag } = useBag();
  const navigate = useNavigate();

  const carousel = useRef<any>(null);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const price = product.isSale
    ? Number(product.salePrice).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    : product.priceAll.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

  let priceType = 0;
  let priceCents = 0;
  let priceAll = 0;

  if (price.length === 9) {
    priceType = price.substr(0, 2);
    priceCents = price.substr(price.length - 3, 3);
    priceAll = price.substr(3, 3);
  } else if (price.length === 8) {
    priceType = price.substr(0, 2);
    priceCents = price.substr(price.length - 3, 3);
    priceAll = price.substr(3, 2);
  } else {
    priceType = price.substr(0, 2);
    priceCents = price.substr(price.length - 3, 3);
    priceAll = price.substr(3, 5);
  }

  return (
    <>
      <StyledCardProduct>
        <StyledBoxImages ref={carousel}>
          <StyledImageProduct
            src={product.image_1}
            alt=""
            onClick={() => {
              navigate(`/produtos/${product.id}`);
            }}
          />
          {product.image_2 && (
            <StyledImageProduct
              src={product.image_2}
              alt=""
              onClick={() => {
                navigate(`/produtos/${product.id}`);
              }}
            />
          )}
          {product.image_3 && (
            <StyledImageProduct
              src={product.image_3}
              alt=""
              onClick={() => {
                navigate(`/produtos/${product.id}`);
              }}
            />
          )}
        </StyledBoxImages>
        <StyledBoxButtonsProducts>
          <StyleButtonRightAndLeft onClick={(e) => handleLeftClick(e)}>
            <Icons.Left />
          </StyleButtonRightAndLeft>
          <StyleButtonRightAndLeft onClick={(e) => handleRightClick(e)}>
            <Icons.Right />
          </StyleButtonRightAndLeft>
        </StyledBoxButtonsProducts>

        <StyledBrandName>
          <span>{product.brand.name}</span>
        </StyledBrandName>
        <StyledProductName>{product.name}</StyledProductName>
        <StyledProductDescription>
          <p>{product.description}</p>
        </StyledProductDescription>
        {product.isSale && (
          <StyledTextPromotion>
            {product.priceAll.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </StyledTextPromotion>
        )}
        <StyledPriceProduct>
          <h3>{priceType}</h3>
          <h4>{priceAll}</h4>
          <h5>{priceCents}</h5>
        </StyledPriceProduct>
        <StyledBoxButtonsAdmin>
          {type === "admin" ? (
            <>
              <StyledButtonMore
                onClick={() => {
                  localStorage.setItem("idProduct", product.id);
                  setImages({
                    image_1: product.image_1,
                    image_2: product.image_2,
                    image_3: product.image_3,
                  });
                  setData(product);
                  setIsOpenModal("ModalEditeProduct");
                }}
              >
                <img src={pen} alt="" />
              </StyledButtonMore>
              <StyledButtonMore
                onClick={() => {
                  localStorage.setItem("idProduct", product.id);
                  setImages({
                    image_1: product.image_1,
                    image_2: product.image_2,
                    image_3: product.image_3,
                  });
                  return setIsOpenModal("ModalUpdateImageProduct");
                }}
                color="goldOne"
              >
                <img src={picture} alt="" />
              </StyledButtonMore>
              <StyledButtonMore
                onClick={() => {
                  localStorage.setItem("idProduct", product.id);

                  setIsOpenModal("ModalDeleteProduct");
                }}
                color="red"
              >
                <img src={trash} alt="" />
              </StyledButtonMore>
            </>
          ) : (
            <StyledButtonMore
              color="gold"
              onClick={async () => {
                await addProductIdInBag(product?.id);
              }}
            >
              <Icons.AddOnCart size={30} color="#F5F5F5" />
            </StyledButtonMore>
          )}
        </StyledBoxButtonsAdmin>
      </StyledCardProduct>
    </>
  );
};
export default CardProducts;
