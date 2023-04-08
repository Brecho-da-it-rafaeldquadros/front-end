import * as yup from "yup"

export const schemaUpdateOrder = yup.object().shape({
    trackingCode:yup
        .string()
        .notRequired(),
    companyTrackingAreaLink:yup
        .string()
        .notRequired()
})