import * as yup from "yup"

export const schemaListDataBank = yup.object().shape({
    password:yup
        .string()
        .required("Deve enviar a senha")
})

export const schemaBankData = yup.object().shape({
    cpf: yup
        .string()
        .notRequired(),
    accountNumber: yup
        .string()
        .notRequired(),
    agency: yup
        .string()
        .notRequired(),
    pix: yup
        .string()
        .notRequired(),
})

