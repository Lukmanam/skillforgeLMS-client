import * as yup from "yup";

import React from "react";

export const addCourseValidation = yup.object().shape({
  courseName: yup.string().required("Please Enter a course Name"),
  courseDescription: yup
    .string()
    .test("len", "must meet at least 15 characters", (val) => val.length >= 15).required('please Enter Course Description'),
    price:yup.number().required("Please Enter The Price"),
    category:yup.string().required("Please Choose any category"),
    // thumbnail: yup
    //       .mixed()
    //       .test('fileType', 'Only image files are allowed', (value) => {
    //         if (!value) return true; 
      
    //         const supportedFormats = ['image/jpeg','image/jpg', 'image/png', 'image/gif'];
      
    //         return value && supportedFormats.includes(value.type);
    //       })
    //       .required('Please upload an image')
});
