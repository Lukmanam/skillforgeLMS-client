import * as Yup from 'yup'

const studentSignupvalidation=Yup.object({
    name:Yup.string().min(3).required("Please Enter your name"),
    email:Yup.string().email("Please enter valid email").required("please enter your email"),
    phone:Yup.number().min(1000000000, 'Phone number should be 10 digits')
    .max(9999999999, 'Phone number should be 10 digits').required("Please enter your phone number"),
    password:Yup.string().min(5).required("Please enter a password"),
    cPassword:Yup.string().oneOf([Yup.ref("password")],"Password Not match")
})



    

export default studentSignupvalidation