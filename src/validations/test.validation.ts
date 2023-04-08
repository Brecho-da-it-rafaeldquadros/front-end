import * as yup from "yup"

export const schemaTest = yup.object().shape({
    lastName:yup
        .string()
        .required("Sobrenome é obrigatorio"),
    // isAcceptTerms:yup
    //     .boolean()
    //     .oneOf([true], "Deve aceitar os termos")
    //     .required("Sobrenome é obrigatorio")
})