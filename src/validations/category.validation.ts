import * as yup from "yup";

export const schemaCreateCategory = yup.object().shape({
  name: yup.string().required("Você precisa digitar o nome da categoria!"),
});
