import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { favouriteStatus } from '../../../api/studentApi';

const FavCourseCard = ({value}) => {
 
  return (
    <div className=" bg-white rounded-lg  outline-slate-500 shadow-lg overflow-hidden m-2  h-60 w-72">
      
    <img
      src={value?.courseId?.thumbnail}
      alt="Course"
      className="w-full h-40 object-cover"
    />

    <div className="p-1">
      <h2 className="text-lg font-semibold mb-2">{value?.courseId?.courseName}</h2>
      <div className="flex">
        <img
          className="w-6 h-6 p-1ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://thumbs.dreamstime.com/b/teacher-icon-vector-male-person-profile-avatar-book-teaching-school-college-university-education-glyph-113754458.jpg"
          alt="Bordered avatar"
        />
        <p className="text-sm text-gray-500 mt-4">
          <b> {value?.instructorId?.name}</b>
        </p>
      </div>
    </div>
   
  </div>
  )
}

export default FavCourseCard
