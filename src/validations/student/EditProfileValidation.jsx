import * as Yup from 'yup'


const EditProfileValidation =Yup.object (
    {
        name:Yup.string().min(3).required("Please Enter your name"),
        phone:Yup.number().min(1000000000, 'Phone number should be 10 digits')
    }
) 

export default EditProfileValidation
