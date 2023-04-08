import * as yup from "yup";

export const schemaSearch = yup.object().shape({
  search: yup.string().required("Você precisa digitar algo!"),
});
