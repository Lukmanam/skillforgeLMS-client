import * as Yup from 'yup'

const intructorSignupValidation=Yup.object({
    name:Yup.string().min(3).required("Please enter your Name"),
    email:Yup.string().email("please enter valid email").required("please enter your email"),
    phone:Yup.number().min(1000000000, 'Phone number should be 10 digits')
    .max(9999999999, 'Phone number should be 10 digits').required("Please enter your phone number"),
    password:Yup.string().min(5).required("please create a password"),
    cPassword:Yup.string().oneOf([Yup.ref('password')],"Passwords do not match")

})

export default intructorSignupValidation;