import * as yup from "yup";

export const schemaCreateProduct = yup.object().shape({
  name: yup.string().required("Você precisa digitar o nome do produto!"),
  // description: yup.string().required("Você precisa digitar uma descrição!"),
  // color: yup.string().required("Você precisa digitar uma cor!"),
  // launchTime: yup
  //   .string()
  //   .required("Você precisa escolhar uma data de lançamento!"),
  // priceSeller: yup.number().required("Você precisa colocar um valor"),
  // size: yup.string().required("Você precisa escolher um tamanho!"),
  // image_1: yup.string().notRequired(),
  // image_2: yup.string().notRequired(),
  // image_3: yup.string().notRequired(),
  // brand: yup.string().notRequired(),
  // category: yup.string().notRequired(),
  // percentageService: yup.number().notRequired(),
});
