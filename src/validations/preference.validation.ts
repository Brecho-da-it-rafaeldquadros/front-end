import * as yup from "yup"

export const schemaAddPreferencesAll = yup.object().shape({
    isActive: yup
        .boolean()
        .notRequired(),
    shoeSize: yup
        .string()
        .oneOf(["PP", "P", "M", "G", "GG"], "Permitido PP P M G GG ( MAIÚSCULO )")
        .required("Deve ter um tamanho do calçado"),
    clothingSize: yup
        .string()
        .oneOf(["PP", "P", "M", "G", "GG"], "Permitido PP P M G GG ( MAIÚSCULO )")
        .required("Deve ter um tamanho de roupa"),
    handBagSize: yup
        .string()
        .oneOf(["PP", "P", "M", "G", "GG"], "Permitido PP P M G GG ( MAIÚSCULO )")
        .required("Deve indicar um tamanho de bolsa"),
    category: yup
        .string()
        .required("Deve indicar qual categoria"),
    brand: yup
        .string()
        .required("Deve indicar qual marca"),
    color: yup
        .string()
        .required("Deve indicar qual sua cor de preferência"),
})

export const schemaUpdatePreferencesAll = yup.object().shape({
    isActive: yup
        .boolean()
        .notRequired(),
    shoeSize: yup
        .string()
        .oneOf(["PP", "P", "M", "G", "GG", ""], "Permitido PP P M G GG ( MAIÚSCULO )")
        .notRequired(),
    clothingSize: yup
        .string()
        .oneOf(["PP", "P", "M", "G", "GG", ""], "Permitido PP P M G GG ( MAIÚSCULO )")
        .notRequired(),
    handBagSize: yup
        .string()
        .oneOf(["PP", "P", "M", "G", "GG", ""], "Permitido PP P M G GG ( MAIÚSCULO )")
        .notRequired(),
    category: yup
        .string()
        .notRequired(),
    brand: yup
        .string()
        .notRequired(),
    color: yup
        .string()
        .notRequired(),
})