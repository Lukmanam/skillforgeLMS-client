import * as yup from 'yup'

export const adminLoginValidation=yup.object().shape({
    email:yup.string().email("please enter valid username").required("Required"),
    password:yup.string().required("Required")

})
