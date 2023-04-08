import * as yup from "yup"

export const addressUserLevelOne = yup.object().shape({
    name:yup
        .string()
        .required("Deve conter um nome"),
    cep: yup
        .string()
        .required("Deve conter o numero da casa"),
    number: yup
        .string()
        .required("Deve conter um CEP"),
    complement: yup
        .string()
        .notRequired(),
    isCompanyAddress: yup
        .boolean()
        .notRequired(),
    isDefault: yup
        .boolean()
        .notRequired()
})

export const addressUpdateUserLevelOne = yup.object().shape({
    name:yup
        .string()
        .notRequired(),
    cep: yup
        .string()
        .notRequired(),
    number: yup
        .string()
        .notRequired(),
    complement: yup
        .string()
        .notRequired(),
    isCompanyAddress: yup
        .boolean()
        .notRequired(),
    isDefault: yup
        .boolean()
        .notRequired()
})
