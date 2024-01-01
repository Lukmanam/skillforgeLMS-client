import * as Yup from 'yup';


const ChangePasswordvalidation=Yup.object({

    newPassword:Yup.string().min(5).required("Create a Stronger Password"),
    cnewPassword:Yup.string().oneOf([Yup.ref('newPassword')],"Passwords do not match")
})

export default ChangePasswordvalidation