import * as yup from "yup";

export const schemaCreateBrand = yup.object().shape({
  name: yup.string().required("Você precisa digitar o nome da categoria!"),
  sizeTable: yup.string().notRequired(),
});
export const schemaUpdateImageBrand = yup.object().shape({
  sizeTable: yup.string().notRequired(),
});
