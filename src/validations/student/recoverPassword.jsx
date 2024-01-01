import * as yup from 'yup'

export const recoverPasswordValidation=yup.object().shape({
    email:yup.string().email("please Enter valid email").required("Required")
})