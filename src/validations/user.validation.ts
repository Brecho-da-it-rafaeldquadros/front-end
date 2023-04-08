import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .required("Email ou Apelido é obrigatorio"),
  password: yup
    .string()
    .max(20, "Pode ter um tamanho máximo de 20 caracteres")
    .required("Senha é obrigatorio"),
});

export const schemaCreateUser = yup.object().shape({
  fullName: yup.string().required("Deve conter um nome completo"),
  email: yup.string().email("Email inválido").required("Deve conter um email"),
  confirmEmail: yup
    .string()
    .email("Email inválido")
    .oneOf([yup.ref<string>("email")], "Email deve ser igual")
    .required("Deve conter um email"),
  isTermsAccepted: yup
    .boolean()
    .oneOf([true], "Deve aceitar os termos")
    .required("Deve aceitar os termos"),
  password: yup
    .string()
    .min(8, "Deve conter no minimo 8 caracteres")
    .max(20, "Pode ter um tamanho máximo de 20 caracteres")
    .required("Deve conter um senha"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref<string>("password")], "Senha deve ser igual")
    .min(8, "Deve conter no minimo 8 caracteres")
    .max(20, "Pode ter um tamanho máximo de 20 caracteres")
    .required("Deve conter um senha"),
  phone: yup
    .string()
    .required("Deve conter um numero de telefone ex: 'DDD 0 0000-0000' "),
  authorizationLevel: yup.string().notRequired(),
});

export const schemaSendEmail = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail")
    .required("Deve ter um e-mail"),
});

export const schemaAuthentication = yup.object().shape({
    password:yup
        .string()
        .required('Deve conter uma senha'),
})

export const schemaUpdatePasswordUser = yup.object().shape({
    password:yup
        .string()
        .min(8, "Deve conter no minimo 8 caracteres")
        .max(20, "Pode ter um tamanho máximo de 20 caracteres")
        .required('Deve conter uma senha'),
    confirmPassword:yup
        .string()
        .oneOf([yup.ref<string>('password')], 'Senha deve ser igual')
        .min(8, "Deve conter no minimo 8 caracteres")
        .max(20, "Pode ter um tamanho máximo de 20 caracteres")
        .required('Deve conter uma senha'),
})

export const schemaRetrieveAccount = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail")
    .required("Deve ter um e-mail"),
  newPassword: yup
    .string()
    .min(8, "Deve conter no minimo 8 caracteres")
    .max(20, "Pode ter um tamanho máximo de 20 caracteres")
    .required("Deve ter uma senha"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref<string>("newPassword")], "Senha deve ser igual")
    .min(8, "Deve conter no minimo 8 caracteres")
    .max(20, "Pode ter um tamanho máximo de 20 caracteres")
    .required("Deve confirmar a senha"),
});

export const schemaCode = yup.object().shape({

    code:yup
        .string()
        .min(6, "Deve ter 6 digitos")
        .max(6, "Deve ter 6 digitos")
        .required('Deve ter um código'),
})


export const schemaUpdateUser = yup.object().shape({
    fullName: yup
        .string()
        .notRequired(),
    email: yup
        .string()
        .email("Email inválido")
        .notRequired(),
    confirmEmail: yup
        .string()
        .email("Email inválido")
        .oneOf([yup.ref<string>('email')], 'Email deve ser igual')
        .notRequired(),
    phone: yup
        .string()
        .notRequired(),
    authorizationLevel: yup
        .string()
        .notRequired()
})

